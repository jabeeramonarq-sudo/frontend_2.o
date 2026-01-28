import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Inbox, FileText, Settings, Users, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "@/lib/api";
import { toast } from "sonner";

export default function AdminDashboard() {
    const [liveStats, setLiveStats] = useState({
        inboxCount: 0,
        pendingCount: 0,
        sectionCount: 0,
        userCount: 0,
        siteQuality: 100
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await api.get("/dashboard/stats");
                setLiveStats(response.data);
            } catch (error) {
                toast.error("Failed to fetch dashboard statistics");
            } finally {
                setIsLoading(false);
            }
        };
        fetchStats();
    }, []);

    const stats = [
        { label: "Total Messages", value: liveStats.inboxCount.toString(), icon: Inbox, color: "text-blue-500", path: "/admin/inbox" },
        { label: "Active Sections", value: liveStats.sectionCount.toString(), icon: FileText, color: "text-green-500", path: "/admin/content" },
        { label: "Site Quality", value: `${liveStats.siteQuality}%`, icon: Settings, color: "text-purple-500", path: "/admin/settings" },
        { label: "Team Users", value: liveStats.userCount.toString(), icon: Users, color: "text-orange-500", path: "/admin/settings" },
    ];

    return (
        <AdminLayout>
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">System Overview</h1>
                <p className="text-slate-400">Manage your site content and communications from here.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, idx) => (
                    <Card key={idx} className="bg-slate-900/50 border-slate-800 hover:border-primary/50 transition-all group overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium text-slate-400 uppercase tracking-widest">{stat.label}</CardTitle>
                            <stat.icon className={`h-5 w-5 ${stat.color} opacity-70 group-hover:opacity-100 transition-all`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-white tabular-nums">{stat.value}</div>
                            <Link to={stat.path} className="text-xs text-primary mt-4 flex items-center gap-1 hover:underline">
                                View details <ArrowUpRight size={12} />
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-slate-900/50 border-slate-800 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Shortcuts</h3>
                    <div className="space-y-4">
                        <Link to="/admin/content" className="flex items-center justify-between p-4 rounded-xl bg-slate-950 hover:bg-slate-800 transition-colors border border-slate-800">
                            <span className="text-slate-300">Update Hero Section</span>
                            <ArrowUpRight size={16} className="text-slate-500" />
                        </Link>
                        <Link to="/admin/settings" className="flex items-center justify-between p-4 rounded-xl bg-slate-950 hover:bg-slate-800 transition-colors border border-slate-800">
                            <span className="text-slate-300">Change Contact Email</span>
                            <ArrowUpRight size={16} className="text-slate-500" />
                        </Link>
                    </div>
                </Card>

                <Card className="bg-slate-900/50 border-slate-800 p-6 flex items-center justify-center text-center">
                    <div>
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <Settings className="text-primary" size={32} />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Platform Status</h3>
                        <p className="text-slate-400 text-sm mb-6">Backend services are connected and running smoothly.</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Operational
                        </div>
                    </div>
                </Card>
            </div>
        </AdminLayout>
    );
}
