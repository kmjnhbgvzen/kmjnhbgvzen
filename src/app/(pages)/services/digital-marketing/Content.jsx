'use client';

import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Eye, MousePointer, Star, MapPin, Search, Target, Facebook, Linkedin, BarChart3, Check } from 'lucide-react';

import { motion } from "framer-motion";

// export const metadata = {title: "Digital Marketing Company – Zentrix Infotech",description: "Complete digital marketing services including SEO, social media, ads, branding and automation for rapid business growth."};


const DigitalMarketingSaaS = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'Overview', icon: BarChart },
        { id: 'ads-management', label: 'Google Ads', icon: Search },
        { id: 'meta-ads', label: 'Meta Ads', icon: Facebook },
        { id: 'linkedin-ads', label: 'LinkedIn Ads', icon: Linkedin },
        { id: 'seo-ranking', label: 'SEO Rankings', icon: TrendingUp },
        { id: 'gmb', label: 'Google My Business', icon: MapPin }
    ];

    const overviewData = [
        { name: 'Jan', impressions: 45000, clicks: 2100, conversions: 180 },
        { name: 'Feb', impressions: 52000, clicks: 2400, conversions: 220 },
        { name: 'Mar', impressions: 48000, clicks: 2800, conversions: 280 },
        { name: 'Apr', impressions: 61000, clicks: 3200, conversions: 340 },
        { name: 'May', impressions: 55000, clicks: 2900, conversions: 295 }
    ];

    const platformData = [
        { name: 'Google Ads', value: 45, color: '#2563EB' },
        { name: 'Meta Ads', value: 30, color: '#0284C7' },
        { name: 'LinkedIn', value: 15, color: '#1D4ED8' },
        { name: 'Others', value: 10, color: '#94A3B8' }
    ];

    const seoData = [
        { keyword: 'Digital Marketing', position: 3, volume: 12000, difficulty: 65 },
        { keyword: 'SEO Services', position: 7, volume: 8500, difficulty: 70 },
        { keyword: 'PPC Management', position: 5, volume: 4200, difficulty: 58 },
        { keyword: 'Social Media Marketing', position: 12, volume: 15000, difficulty: 72 }
    ];

    const StatCard = ({ icon: Icon, title, value, change }) => (
        <div className="group bg-white border border-slate-200/90 hover:border-blue-400 rounded-2xl p-4 sm:p-6 shadow-[0_4px_20px_-4px_rgba(23,92,211,0.06)] hover:shadow-[0_16px_30px_-6px_rgba(23,92,211,0.14)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-blue-50 via-sky-50 to-blue-100/70 border border-blue-200/60 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-105" />
                </div>
                <span className="text-xs sm:text-sm font-semibold px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700">
                    +{change}%
                </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{value}</h3>
            <p className="text-slate-700 text-xs sm:text-sm font-semibold">{title}</p>
        </div>
    );

    const renderOverview = () => (
        <div className="space-y-6 sm:space-y-8 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <StatCard icon={Eye} title="Total Impressions" value="261K" change="12" />
                <StatCard icon={MousePointer} title="Total Clicks" value="13.4K" change="18" />
                <StatCard icon={Users} title="Conversions" value="1,315" change="24" />
                <StatCard icon={Target} title="ROAS" value="4.2x" change="8" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-white border border-slate-200/90 hover:border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6">Performance Trends</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={overviewData}>
                            <XAxis dataKey="name" stroke="#64748B" />
                            <YAxis stroke="#64748B" />
                            <Line type="monotone" dataKey="impressions" stroke="#2563EB" strokeWidth={3} />
                            <Line type="monotone" dataKey="clicks" stroke="#0284C7" strokeWidth={3} />
                            <Line type="monotone" dataKey="conversions" stroke="#1D4ED8" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white border border-slate-200/90 hover:border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6">Traffic Distribution</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie data={platformData} cx="50%" cy="50%" outerRadius={100} dataKey="value">
                                {platformData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );

    const renderGoogleAds = () => (
        <div className="space-y-4 sm:space-y-6 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <StatCard icon={Eye} title="Impressions" value="156K" change="15" />
                <StatCard icon={MousePointer} title="Clicks" value="8.2K" change="22" />
                <StatCard icon={Target} title="CPC" value="$2.45" change="5" />
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">Campaign Performance</h3>
                <div className="space-y-3 sm:space-y-4">
                    {['Search Campaign', 'Display Campaign', 'Shopping Campaign'].map((campaign, i) => (
                        <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-3.5 sm:p-4 bg-slate-50/80 hover:bg-blue-50/30 rounded-xl border border-slate-200/80 hover:border-blue-200 transition-colors">
                            <span className="text-slate-900 font-semibold text-sm sm:text-base">{campaign}</span>
                            <div className="flex flex-wrap gap-2.5 sm:gap-4 text-xs sm:text-sm">
                                <span className="text-blue-700 font-semibold bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">CTR: {(2.1 + i * 0.3).toFixed(1)}%</span>
                                <span className="text-slate-800 font-semibold bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">Conv: {(180 + i * 20)}</span>
                                <span className="text-blue-800 font-semibold bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">Cost: ${(1200 + i * 300)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderMetaAds = () => (
        <div className="space-y-4 sm:space-y-6 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <StatCard icon={Eye} title="Reach" value="98K" change="18" />
                <StatCard icon={Users} title="Engagement" value="12.5K" change="25" />
                <StatCard icon={Target} title="CPM" value="$8.50" change="3" />
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">Ad Set Performance</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={[
                        { name: 'Awareness', facebook: 45, instagram: 38 },
                        { name: 'Traffic', facebook: 52, instagram: 41 },
                        { name: 'Conversions', facebook: 38, instagram: 45 }
                    ]}>
                        <XAxis dataKey="name" stroke="#64748B" />
                        <YAxis stroke="#64748B" />
                        <Bar dataKey="facebook" fill="#2563EB" />
                        <Bar dataKey="instagram" fill="#0284C7" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );

    const renderLinkedInAds = () => (
        <div className="space-y-4 sm:space-y-6 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <StatCard icon={Eye} title="Impressions" value="45K" change="12" />
                <StatCard icon={Users} title="Leads" value="342" change="28" />
                <StatCard icon={Target} title="CPL" value="$24.50" change="8" />
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">Audience Insights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {['IT Services', 'Marketing', 'Finance', 'Healthcare'].map((industry, i) => (
                        <div key={i} className="p-3.5 sm:p-4 bg-slate-50/80 hover:bg-blue-50/30 rounded-xl border border-slate-200/80 hover:border-blue-200 transition-colors">
                            <div className="flex justify-between mb-2">
                                <span className="text-slate-900 text-sm font-semibold">{industry}</span>
                                <span className="text-blue-600 text-sm font-bold">{(25 + i * 15)}%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${25 + i * 15}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderSEO = () => (
        <div className="space-y-4 sm:space-y-6 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <StatCard icon={TrendingUp} title="Avg Position" value="5.2" change="15" />
                <StatCard icon={Search} title="Total Keywords" value="847" change="8" />
                <StatCard icon={Eye} title="Organic Traffic" value="28.5K" change="32" />
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">Keyword Rankings</h3>
                <div className="space-y-3">
                    {seoData.map((item, i) => (
                        <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 bg-slate-50/80 hover:bg-blue-50/30 rounded-xl border border-slate-200/80 hover:border-blue-200 transition-colors">
                            <div>
                                <span className="text-slate-900 font-semibold text-sm sm:text-base">{item.keyword}</span>
                                <div className="text-xs sm:text-sm text-slate-700 font-medium">Vol: {item.volume.toLocaleString()} | Difficulty: {item.difficulty}%</div>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap ${
                                item.position <= 3 ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                                item.position <= 10 ? 'bg-sky-50 text-sky-800 border border-sky-200' :
                                    'bg-slate-100 text-slate-800 border border-slate-200'
                                }`}>
                                #{item.position}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderGMB = () => (
        <div className="space-y-4 sm:space-y-6 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <StatCard icon={Eye} title="Profile Views" value="2.8K" change="22" />
                <StatCard icon={Star} title="Avg Rating" value="4.7" change="5" />
                <StatCard icon={MapPin} title="Direction Requests" value="456" change="18" />
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">Business Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                        <h4 className="text-slate-900 font-semibold mb-3 text-sm sm:text-base">Search Queries</h4>
                        <div className="space-y-2">
                            {['Digital marketing agency', 'SEO services near me', 'PPC management'].map((query, i) => (
                                <div key={i} className="flex justify-between p-2.5 bg-slate-50/80 rounded-lg border border-slate-200">
                                    <span className="text-slate-800 text-xs sm:text-sm font-medium">{query}</span>
                                    <span className="text-blue-600 text-xs sm:text-sm font-semibold">{(45 - i * 12)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-slate-900 font-semibold mb-3 text-sm sm:text-base">Customer Actions</h4>
                        <div className="space-y-3">
                            {[
                                { action: 'Website Visits', count: 324 },
                                { action: 'Phone Calls', count: 89 },
                                { action: 'Direction Requests', count: 156 }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-1.5">
                                    <span className="text-slate-800 text-xs sm:text-sm font-medium">{item.action}</span>
                                    <span className="text-blue-600 font-semibold text-sm sm:text-base">{item.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'ads-management': return renderGoogleAds();
            case 'meta-ads': return renderMetaAds();
            case 'linkedin-ads': return renderLinkedInAds();
            case 'seo-ranking': return renderSEO();
            case 'gmb': return renderGMB();
            default: return renderOverview();
        }
    };

    return (
        <div className="min-h-fit lg:min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 text-slate-900">
            <div className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-36 pb-16 lg:pb-24">
                <div className="mb-4 sm:mb-8 text-left md:text-center">
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-medium font-serif bg-linear-to-r from-blue-700 via-blue-600 to-sky-600 bg-clip-text text-transparent mb-2 sm:mb-4 leading-tight drop-shadow-xs">
                        Digital Marketing
                    </h1>
                    <p className="max-w-3xl mx-auto text-slate-700 text-base md:text-xl leading-relaxed text-left sm:text-center">
                        Unified analytics dashboard for all your marketing campaigns
                    </p>
                </div>

                {/* Interactive Marketing Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 100 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1, ease: "backOut" }}
                    className="relative mt-6 sm:mt-10 md:mt-12 mb-8 sm:mb-12"
                >
                    <div className="relative mx-auto max-w-6xl">
                        <motion.div
                            className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-300 backdrop-blur-xl bg-linear-to-br from-white to-slate-50 group"
                            whileHover={{ y: -5, rotateX: 1, rotateY: 1 }}
                            transition={{ duration: 0.4, ease: "backOut" }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Dashboard Header */}
                            <div className="bg-linear-to-r from-slate-100 to-slate-200 p-4 md:p-6 border-b border-slate-300">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                    <div className="flex items-center gap-3 md:gap-4">
                                        <div className="flex gap-1.5 md:gap-2">
                                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                        <span className="text-slate-700 font-semibold text-sm md:text-base">Marketing Analytics Pro</span>
                                    </div>
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="px-2.5 py-1 md:px-3 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-semibold border border-blue-200/60">Live Campaign</div>
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Marketing Dashboard Content */}
                            <div className="bg-linear-to-br from-white to-slate-50 relative overflow-hidden min-h-[400px] md:aspect-video">
                                <div className="absolute inset-0 p-4 md:p-8">
                                    {/* Marketing Stats Cards */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-0 md:h-full">
                                        {[
                                            { icon: Target, label: "Campaign ROI", value: "425%", change: "+85%", desc: "vs last month" },
                                            { icon: Users, label: "Lead Generation", value: "2.4K", change: "+32%", desc: "new leads" },
                                            { icon: MousePointer, label: "CTR", value: "8.7%", change: "+2.1%", desc: "click rate" },
                                            { icon: BarChart3, label: "Conversion", value: "12.3%", change: "+4.2%", desc: "conversion rate" },
                                        ].map((stat, index) => (
                                            <motion.div
                                                key={index}
                                                className="bg-white/95 rounded-xl md:rounded-2xl p-3 md:p-4 border border-blue-100/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all relative overflow-hidden group"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.5 + index * 0.1 }}
                                            >
                                                <div className="flex items-center justify-between mb-2 md:mb-3">
                                                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-100/80 flex items-center justify-center">
                                                        <stat.icon className="w-4 h-4" />
                                                    </div>
                                                    <div className="text-blue-700 text-xs md:text-sm font-semibold bg-blue-50 border border-blue-200/50 px-2 py-0.5 rounded-full">
                                                        {stat.change}
                                                    </div>
                                                </div>
                                                <div className="text-slate-700 text-xs mb-1 font-semibold">{stat.label}</div>
                                                <div className="text-slate-900 text-lg md:text-xl font-bold mb-1">{stat.value}</div>
                                                <div className="text-slate-700 text-xs font-medium">{stat.desc}</div>

                                                <motion.div
                                                    className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-blue-600 to-sky-400"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${Math.random() * 80 + 20}%` }}
                                                    transition={{ delay: 2 + index * 0.2, duration: 1 }}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Marketing Campaign Performance Chart */}
                                    <div className="md:absolute md:bottom-8 md:left-8 md:right-8 md:h-32 bg-linear-to-r from-blue-50/80 to-sky-50/70 rounded-xl border border-blue-200/70 p-3 md:p-4 h-24 mb-4 md:mb-0">
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 md:mb-4 gap-2">
                                            <h3 className="text-slate-800 font-bold text-sm">Campaign Performance</h3>
                                            <div className="flex gap-2 md:gap-4 text-xs flex-wrap">
                                                <div className="flex items-center gap-1 md:gap-2">
                                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full"></div>
                                                    <span className="text-slate-700 font-semibold">Google Ads</span>
                                                </div>
                                                <div className="flex items-center gap-1 md:gap-2">
                                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-sky-500 rounded-full"></div>
                                                    <span className="text-slate-700 font-semibold">Facebook Ads</span>
                                                </div>
                                                <div className="flex items-center gap-1 md:gap-2">
                                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full"></div>
                                                    <span className="text-slate-700 font-semibold">LinkedIn Ads</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Animated Chart Bars */}
                                        <div className="flex items-end justify-center gap-0.5 md:gap-1 h-12 md:h-16">
                                            {Array.from({ length: 24 }).map((_, i) => (
                                                <div key={i} className="flex flex-col gap-0.5 md:gap-1 flex-1">
                                                    <motion.div
                                                        className="bg-linear-to-t from-blue-600 to-blue-400 rounded-xs"
                                                        initial={{ height: 0 }}
                                                        animate={{ height: `${Math.random() * 30 + 10}px` }}
                                                        transition={{ delay: 2.5 + i * 0.05, duration: 0.5, repeat: Infinity, repeatDelay: 8, ease: "easeOut" }}
                                                    />
                                                    <motion.div
                                                        className="bg-linear-to-t from-sky-500 to-sky-400 rounded-xs"
                                                        initial={{ height: 0 }}
                                                        animate={{ height: `${Math.random() * 25 + 15}px` }}
                                                        transition={{ delay: 2.7 + i * 0.05, duration: 0.5, repeat: Infinity, repeatDelay: 8, ease: "easeOut" }}
                                                    />
                                                    <motion.div
                                                        className="bg-linear-to-t from-indigo-500 to-blue-500 rounded-xs"
                                                        initial={{ height: 0 }}
                                                        animate={{ height: `${Math.random() * 20 + 8}px` }}
                                                        transition={{ delay: 2.9 + i * 0.05, duration: 0.5, repeat: Infinity, repeatDelay: 8, ease: "easeOut" }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Marketing Strategy Alerts */}
                                    <div className="space-y-2 md:space-y-3 md:absolute md:top-8 md:right-8">
                                        {[
                                            { text: "A/B Test: +15% CTR", icon: TrendingUp },
                                            { text: "Budget Alert: 85% spent", icon: Target },
                                            { text: "New lead source found", icon: Users },
                                        ].map((alert, index) => (
                                            <motion.div
                                                key={index}
                                                className="bg-white/95 border border-blue-200/80 shadow-xs rounded-lg p-2 md:p-3 backdrop-blur-sm w-full md:min-w-48"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 3 + index * 0.3 }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                                        <alert.icon className="w-3.5 h-3.5" />
                                                    </div>
                                                    <span className="text-slate-800 text-xs md:text-sm font-semibold">{alert.text}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Scanning Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-linear-to-r from-transparent via-blue-100/60 to-transparent"
                                    animate={{ x: [-100, 800] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
                                />
                            </div>
                        </motion.div>

                        {/* Glow Effect */}
                        <motion.div
                            className="absolute -inset-4 md:-inset-8 bg-linear-to-r from-blue-200/50 via-sky-200/40 to-indigo-100/30 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl -z-10"
                            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>

                {/* What We Provide Section */}
                <div className="mb-8 sm:mb-12 pt-10 lg:px-20">
                    <div className="text-center mb-8 sm:mb-10">
                        <span className="inline-block px-3.5 py-1 bg-blue-50 border border-blue-200/70 text-blue-700 rounded-full text-xs font-semibold tracking-wide uppercase mb-3">
                            Our Core Offerings
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-slate-900 mb-3 sm:mb-4">What We Provide</h2>
                        <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base px-4">
                            Comprehensive digital marketing solutions to grow your business across all channels
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                        {[
                            {
                                icon: Search,
                                title: "Google Ads Management",
                                description: "Search, Display, Shopping & YouTube campaigns with advanced targeting and optimization",
                                features: ["Keyword Research", "Ad Copy Creation", "Bid Management", "Conversion Tracking"]
                            },
                            {
                                icon: Facebook,
                                title: "Meta Ads (Facebook & Instagram)",
                                description: "Social media advertising across Facebook and Instagram with creative strategy",
                                features: ["Audience Targeting", "Creative Design", "A/B Testing", "Retargeting Campaigns"]
                            },
                            {
                                icon: Linkedin,
                                title: "LinkedIn Advertising",
                                description: "B2B lead generation and brand awareness campaigns for professional audiences",
                                features: ["Lead Gen Forms", "Sponsored Content", "Message Ads", "Account Targeting"]
                            },
                            {
                                icon: TrendingUp,
                                title: "Search Engine Optimization",
                                description: "Organic ranking improvement through technical SEO, content, and link building",
                                features: ["Keyword Optimization", "Technical SEO", "Content Strategy", "Local SEO"]
                            },
                            {
                                icon: MapPin,
                                title: "Google My Business",
                                description: "Local business optimization to increase visibility in local search results",
                                features: ["Profile Optimization", "Review Management", "Local Citations", "GMB Posts"]
                            },
                            {
                                icon: BarChart3,
                                title: "Analytics & Reporting",
                                description: "Comprehensive tracking and reporting across all marketing channels",
                                features: ["Performance Tracking", "ROI Analysis", "Custom Dashboards", "Monthly Reports"]
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white border border-slate-200/90 hover:border-blue-400 rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(23,92,211,0.06)] hover:shadow-[0_20px_35px_-8px_rgba(23,92,211,0.16)] hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden"
                            >
                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-sky-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Ambient Light Blue Highlight Glow */}
                                <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-50/70 rounded-full blur-2xl group-hover:bg-blue-100/80 transition-all duration-300 pointer-events-none" />

                                <div>
                                    {/* Icon Container */}
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br from-blue-50 via-sky-50 to-blue-100/80 border border-blue-200/70 flex items-center justify-center text-blue-600 shadow-xs group-hover:from-blue-600 group-hover:to-sky-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-md group-hover:shadow-blue-500/25 transition-all duration-300 shrink-0">
                                        <service.icon className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110" />
                                    </div>

                                    {/* Service Title */}
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 mt-4 mb-2">
                                        {service.title}
                                    </h3>

                                    {/* Service Description */}
                                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="pt-4 border-t border-slate-100/90 space-y-2.5">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center text-xs sm:text-sm">
                                            <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mr-2.5 shrink-0 group-hover:bg-blue-100/80 transition-colors">
                                                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                            </div>
                                            <span className="text-slate-800 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Key Benefits */}
                    <div className="bg-linear-to-b from-blue-50/70 via-white to-sky-50/50 border border-blue-200/80 rounded-2xl p-6 sm:p-10 shadow-sm">
                        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
                            <span className="inline-block px-3.5 py-1 bg-blue-100/70 border border-blue-200 text-blue-700 rounded-full text-xs font-semibold tracking-wide uppercase mb-2">
                                Why Zentrix
                            </span>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
                                Why Choose Our Digital Marketing Services?
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {[
                                { icon: Target, title: "ROI Focused", description: "Every campaign optimized for maximum return on investment" },
                                { icon: Users, title: "Expert Team", description: "Certified professionals with years of industry experience" },
                                { icon: Eye, title: "Full Transparency", description: "Real-time reporting and complete campaign visibility" },
                                { icon: TrendingUp, title: "Scalable Growth", description: "Strategies that grow with your business needs" }
                            ].map((benefit, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-400 shadow-sm hover:shadow-[0_12px_24px_-6px_rgba(23,92,211,0.12)] hover:-translate-y-1.5 transition-all duration-300 text-center flex flex-col items-center"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3.5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                                        <benefit.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                                    </div>
                                    <h4 className="text-slate-900 font-semibold mb-2 text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 p-2 lg:mx-20 bg-white rounded-2xl backdrop-blur border border-slate-200/80 shadow-sm">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center px-3.5 sm:px-4 py-2 rounded-xl transition-all text-sm sm:text-base font-medium ${activeTab === tab.id
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                                : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/60'
                                }`}
                        >
                            <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
                            <span className="hidden sm:inline">{tab.label}</span>
                            <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                        </button>
                    ))}
                </div>

                {renderContent()}
            </div>
        </div>
    );
};

export default DigitalMarketingSaaS;
