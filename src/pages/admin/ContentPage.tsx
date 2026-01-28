import { useState, useEffect } from "react";
import { FileText, Edit2, Eye, Layout, Plus, Trash2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/api";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Section {
    _id: string;
    sectionId: string;
    title: string;
    subtitle: string;
    body: string;
    image?: string;
}

export default function ContentPage() {
    const [sections, setSections] = useState<Section[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [open, setOpen] = useState(false);

    const [formData, setFormData] = useState({
        sectionId: "",
        title: "",
        subtitle: "",
        body: ""
    });

    const fetchSections = async () => {
        try {
            const response = await api.get("/content");
            setSections(response.data);
        } catch (error) {
            toast.error("Failed to fetch sections");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSections();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await api.post("/content", formData);
            toast.success("Section updated/created successfully");
            fetchSections();
            setOpen(false);
            setFormData({ sectionId: "", title: "", subtitle: "", body: "" });
        } catch (error) {
            toast.error("Failed to save section");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this section permanently?")) return;
        try {
            await api.delete(`/content/${id}`);
            toast.success("Section deleted");
            fetchSections();
        } catch (error) {
            toast.error("Failed to delete section");
        }
    };

    const handleEdit = (section: Section) => {
        setFormData({
            sectionId: section.sectionId,
            title: section.title,
            subtitle: section.subtitle,
            body: section.body
        });
        setOpen(true);
    };

    const getCategory = (sectionId: string) => {
        const prefix = sectionId.split('-')[0];
        const categories: Record<string, string> = {
            home: "Home Page",
            about: "About Page",
            product: "Product Page",
            continuity: "Continuity Page",
            life: "Life Events Page",
            consent: "Consent Page",
            security: "Security Page",
            how: "How It Works Page",
            contact: "Contact Page",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            legal: "Legal Info"
        };
        return categories[prefix] || "Other Content";
    };

    const groupedSections = sections.reduce((acc, section) => {
        const cat = getCategory(section.sectionId);
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(section);
        return acc;
    }, {} as Record<string, Section[]>);

    return (
        <AdminLayout>
            <div className="mb-10 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Content Management</h1>
                    <p className="text-slate-400">Edit dynamic sections across your entire website, organized by page.</p>
                </div>
                <Button variant="outline" className="border-slate-800 text-slate-300 hover:bg-slate-800">
                    <Layout size={18} className="mr-2" /> Preview Site
                </Button>
            </div>

            <div className="space-y-12">
                {isLoading ? (
                    <div className="py-20 text-center text-slate-500 flex flex-col items-center gap-2">
                        <Loader2 className="animate-spin" />
                        Loading sections...
                    </div>
                ) : (
                    Object.entries(groupedSections).map(([category, items]) => (
                        <div key={category} className="space-y-6">
                            <div className="flex items-center gap-4">
                                <h2 className="text-xl font-semibold text-primary/80 uppercase tracking-wider">{category}</h2>
                                <div className="h-px flex-1 bg-slate-800"></div>
                                <span className="text-xs text-slate-500 font-mono">{items.length} sections</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {items.map((section) => (
                                    <Card key={section._id} className="bg-slate-900/50 border-slate-800 p-6 flex items-start justify-between group hover:border-primary/30 transition-all duration-300">
                                        <div className="flex gap-4">
                                            <div className="h-12 w-12 rounded-xl bg-slate-950 flex items-center justify-center text-primary border border-slate-800 group-hover:bg-primary/10 transition-colors">
                                                <FileText size={24} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{section.title}</h3>
                                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">{section.sectionId}</span>
                                                </div>
                                                <p className="text-sm text-slate-400 line-clamp-2">{section.subtitle || section.body}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                className="text-slate-400 hover:text-white hover:bg-slate-800"
                                                onClick={() => handleEdit(section)}
                                            >
                                                <Edit2 size={16} />
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                className="text-slate-400 hover:text-red-500 hover:bg-red-500/10"
                                                onClick={() => handleDelete(section._id)}
                                            >
                                                <Trash2 size={16} />
                                            </Button>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="mt-12 p-8 border border-dashed border-slate-800 rounded-2xl text-center">
                <p className="text-slate-500 mb-4">Need to add a custom dynamic section?</p>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                            <Plus size={18} className="mr-2" /> Register New Section
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-900 border-slate-800 text-white sm:max-w-lg">
                        <DialogHeader>
                            <DialogTitle>Content Section Editor</DialogTitle>
                            <DialogDescription className="text-slate-400">
                                Create or update a dynamic content section for your site.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4 py-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="sectionId">Identifier (Slug)</Label>
                                    <Input
                                        id="sectionId"
                                        placeholder="e.g. hero-main"
                                        className="bg-slate-950 border-slate-800 text-white"
                                        value={formData.sectionId}
                                        onChange={e => setFormData({ ...formData, sectionId: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="title">Section Title</Label>
                                    <Input
                                        id="title"
                                        placeholder="Display Title"
                                        className="bg-slate-950 border-slate-800 text-white"
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subtitle">Subtitle / Short Text</Label>
                                <Input
                                    id="subtitle"
                                    placeholder="Brief description or catchphrase"
                                    className="bg-slate-950 border-slate-800 text-white"
                                    value={formData.subtitle}
                                    onChange={e => setFormData({ ...formData, subtitle: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="body">Main Content Body</Label>
                                <Textarea
                                    id="body"
                                    placeholder="Detailed content text"
                                    className="bg-slate-950 border-slate-800 text-white min-h-[150px]"
                                    value={formData.body}
                                    onChange={e => setFormData({ ...formData, body: e.target.value })}
                                    required
                                />
                            </div>
                            <DialogFooter>
                                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white">
                                    {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : <Layout size={18} className="mr-2" />}
                                    Save Section Changes
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </AdminLayout>
    );
}
