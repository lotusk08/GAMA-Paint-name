/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Copy, 
  Check, 
  Download, 
  Grid, 
  List, 
  FileText, 
  Paintbrush, 
  Shield, 
  Layers, 
  Sparkles, 
  Plus, 
  Home, 
  Info, 
  TrendingUp, 
  SlidersHorizontal,
  FolderKanban,
  FileCheck2,
  Trash2,
  BookmarkCheck,
  Heart,
  Users,
  Award,
  UserCheck,
  RefreshCw,
  BarChart3,
  Flame,
  ThumbsUp,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { suggestionsData, paintCategories, paintTiers, Suggestion } from './data';

// Extend Suggestion with votes for state management
interface VotedSuggestion extends Suggestion {
  votes: number;
}

interface VoteHistory {
  id: string;
  voterName: string;
  brandId: string;
  brandName: string;
  timestamp: string;
}

export default function App() {
  // Initialize state with default votes if not already in localStorage
  const [suggestions, setSuggestions] = useState<VotedSuggestion[]>(() => {
    const saved = localStorage.getItem('gama_suggestions_voted_v5');
    
    // Helper to clean up any duplicates and respect category-tier constraints
    const cleanList = (list: any[]): VotedSuggestion[] => {
      const result: VotedSuggestion[] = [];
      const seen = new Set<string>();
      
      list.forEach((item) => {
        // "Sơn trang trí" không có dòng "Cơ bản" và "Chiến lược"
        if (item.category === 'Sơn trang trí' && (item.tier === 'Chiến lược' || item.tier === 'Cơ bản')) {
          return;
        }
        // "Bột trét" không có dòng "Cơ bản"
        if (item.category === 'Bột trét/Matit' && item.tier === 'Cơ bản') {
          return;
        }
        
        // Deduplicate by ID to ensure all 540 items are included
        if (!seen.has(item.id)) {
          seen.add(item.id);
          result.push({
            ...item,
            votes: typeof item.votes === 'number' ? item.votes : 0
          });
        }
      });
      
      return result;
    };

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed) && parsed.length > 0) {
          return cleanList(parsed);
        }
      } catch (e) {
        console.error('Lỗi phân tích localStorage:', e);
      }
    }
    
    // Initialize everything with exactly 0 votes and run through cleanup
    return cleanList(suggestionsData.map((item) => ({
      ...item,
      votes: 0
    })));
  });

  // Keep track of which brand IDs the current session has voted for
  const [myVotedIds, setMyVotedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('gama_my_voted_ids_v5');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  // Current employee identity for voting
  const [voterName, setVoterName] = useState<string>(() => {
    return localStorage.getItem('gama_voter_name') || '';
  });
  
  const [tempVoterName, setTempVoterName] = useState(voterName);
  const [isEditingVoter, setIsEditingVoter] = useState(!voterName);

  // Voting history
  const [voteHistory, setVoteHistory] = useState<VoteHistory[]>(() => {
    const saved = localStorage.getItem('gama_vote_history_v5');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');
  const [leaderboardMode, setLeaderboardMode] = useState<'all' | 'group'>('all');

  // Get available tiers based on selectedCategory
  const availableTiers = useMemo(() => {
    if (selectedCategory === 'decorative') {
      // Sơn trang trí không có dòng cơ bản và chiến lược
      return paintTiers.filter(tier => tier.id !== 'strategic' && tier.id !== 'basic');
    }
    if (selectedCategory === 'putty') {
      // Bột trét không có dòng cơ bản
      return paintTiers.filter(tier => tier.id !== 'basic');
    }
    return paintTiers;
  }, [selectedCategory]);

  // Reset selectedTier if it's no longer available under the current category
  useEffect(() => {
    const isAvailable = availableTiers.some(t => t.id === selectedTier);
    if (!isAvailable) {
      setSelectedTier('all');
    }
  }, [selectedCategory, availableTiers, selectedTier]);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'text'>('grid');
  const [sortBy, setSortBy] = useState<'default' | 'votes-desc' | 'votes-asc' | 'alphabetical'>('votes-desc');
  
  // Notification Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('gama_suggestions_voted_v5', JSON.stringify(suggestions));
  }, [suggestions]);

  useEffect(() => {
    localStorage.setItem('gama_my_voted_ids_v5', JSON.stringify(myVotedIds));
  }, [myVotedIds]);

  useEffect(() => {
    localStorage.setItem('gama_vote_history_v5', JSON.stringify(voteHistory));
  }, [voteHistory]);

  useEffect(() => {
    localStorage.setItem('gama_voter_name', voterName);
  }, [voterName]);

  // Show Toast helper
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Handle single voting action
  const handleVote = (id: string, name: string) => {
    // Check if voter identity is provided, otherwise prompt
    if (!voterName.trim()) {
      showToast('Vui lòng nhập Tên/Phòng ban của bạn ở góc trái trước khi bình chọn!');
      setIsEditingVoter(true);
      // Focus element
      const el = document.getElementById('voter-input-box');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const alreadyVoted = myVotedIds.includes(id);

    if (alreadyVoted) {
      // Cancel vote
      setSuggestions(prev => prev.map(item => {
        if (item.id === id) {
          return { ...item, votes: Math.max(0, item.votes - 1) };
        }
        return item;
      }));
      setMyVotedIds(prev => prev.filter(vId => vId !== id));
      setVoteHistory(prev => prev.filter(h => !(h.brandId === id && h.voterName === voterName)));
      showToast(`Đã rút phiếu bầu chọn cho: ${name}`);
    } else {
      // Cast vote
      setSuggestions(prev => prev.map(item => {
        if (item.id === id) {
          return { ...item, votes: item.votes + 1 };
        }
        return item;
      }));
      setMyVotedIds(prev => [...prev, id]);
      
      const newHistoryEntry: VoteHistory = {
        id: `vote_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        voterName: voterName,
        brandId: id,
        brandName: name,
        timestamp: 'Vừa xong'
      };
      setVoteHistory(prev => [newHistoryEntry, ...prev].slice(0, 20)); // Limit to last 20 entries
      showToast(`🎉 Đã ghi nhận phiếu bầu của bạn cho: ${name}!`);
    }
  };

  // Set Employee identity
  const handleSaveVoterName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tempVoterName.trim()) {
      showToast('Vui lòng nhập tên hợp lệ!');
      return;
    }
    setVoterName(tempVoterName.trim());
    setIsEditingVoter(false);
    showToast(`Chào mừng ${tempVoterName.trim()}! Hãy bắt đầu bình chọn.`);
  };

  // Copy helper
  const copyToClipboard = (text: string, msg: string) => {
    navigator.clipboard.writeText(text);
    showToast(msg);
  };

  // Copy full list in plain text format (including votes)
  const handleCopyFullList = (list: Suggestion[]) => {
    const formattedText = list.map(item => {
      const voteCount = (item as any).votes || 0;
      return `${item.name} (Phân khúc: ${item.tier}, Lượt bầu: ${voteCount} phiếu) - Lý do: ${item.reason}`;
    }).join('\n');
    copyToClipboard(formattedText, 'Đã sao chép danh sách kèm kết quả bình chọn vào Clipboard!');
  };

  // Download list as txt file (including votes)
  const handleDownloadTxt = (list: Suggestion[]) => {
    const formattedText = list.map((item, idx) => {
      const voteCount = (item as any).votes || 0;
      return `${idx + 1}. ${item.name} [Phân khúc: ${item.tier} | Dòng: ${item.category} | Số phiếu: ${voteCount}]\n- Lý do: ${item.reason}${item.slogan ? `\n- Slogan: "${item.slogan}"` : ''}\n`;
    }).join('\n' + '='.repeat(40) + '\n');

    const header = `BÁO CÁO KẾT QUẢ BÌNH CHỌN THƯƠNG HIỆU SƠN GAMA (2026)\n` +
                   `Tổng số đề xuất: ${list.length}\n` +
                   `Thời gian xuất file: ${new Date().toLocaleString('vi-VN')}\n` +
                   `\nDANH SÁCH CHI TIẾT SẮP XẾP THEO BỘ LỌC HIỆN TẠI:\n\n` +
                   `========================================\n\n`;

    const blob = new Blob([header + formattedText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Ket_qua_binh_chon_GAMA_Paint_${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Tải tệp báo cáo kết quả bầu chọn (.TXT) thành công!');
  };

  // Top 5 brands leaderboard calculation
  const topVotedBrands = useMemo(() => {
    return [...suggestions]
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 5);
  }, [suggestions]);

  // Top brands grouped by category and tier (segment)
  const topVotedByGroup = useMemo(() => {
    const categoriesList = ['Sơn nội thất', 'Sơn ngoại thất', 'Sơn chống thấm', 'Bột trét', 'Sơn trang trí'];
    const result: { 
      category: string; 
      tiers: { tier: string; topItem: VotedSuggestion | null }[] 
    }[] = [];
    
    categoriesList.forEach(cat => {
      let validTiers: string[] = [];
      if (cat === 'Sơn nội thất' || cat === 'Sơn ngoại thất') {
        validTiers = ['Cao cấp', 'Chiến lược', 'Cơ bản'];
      } else if (cat === 'Bột trét') {
        validTiers = ['Cao cấp', 'Chiến lược'];
      } else { // 'Chống thấm', 'Sơn trang trí'
        validTiers = ['Cao cấp'];
      }
      
      const tierItems = validTiers.map(tier => {
        const items = suggestions.filter(item => item.category === cat && item.tier === tier);
        const sorted = [...items].sort((a, b) => b.votes - a.votes);
        return {
          tier,
          topItem: sorted[0] || null
        };
      });
      
      result.push({
        category: cat,
        tiers: tierItems
      });
    });
    
    return result;
  }, [suggestions]);

  // Filter & Search & Sort Logic
  const filteredSuggestions = useMemo(() => {
    let result = suggestions.filter(item => {
      // Category filter
      if (selectedCategory !== 'all') {
        const catObj = paintCategories.find(c => c.id === selectedCategory);
        if (catObj && item.category !== catObj.value) return false;
      }

      // Tier filter
      if (selectedTier !== 'all') {
        const tierObj = paintTiers.find(t => t.id === selectedTier);
        if (tierObj && item.tier !== tierObj.value) return false;
      }

      // Search query filter (ignore case, match name or reason)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(query);
        const matchReason = item.reason.toLowerCase().includes(query);
        const matchSlogan = item.slogan?.toLowerCase().includes(query) || false;
        return matchName || matchReason || matchSlogan;
      }

      return true;
    });

    // Apply Sorting
    if (sortBy === 'votes-desc') {
      result.sort((a, b) => b.votes - a.votes);
    } else if (sortBy === 'votes-asc') {
      result.sort((a, b) => a.votes - b.votes);
    } else if (sortBy === 'alphabetical') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [suggestions, selectedCategory, selectedTier, searchQuery, sortBy]);

  // Statistics
  const stats = useMemo(() => {
    const total = suggestions.length;
    const premiumCount = suggestions.filter(item => item.tier === 'Cao cấp').length;
    const strategicCount = suggestions.filter(item => item.tier === 'Chiến lược').length;
    const basicCount = suggestions.filter(item => item.tier === 'Cơ bản').length;
    
    const totalVotes = suggestions.reduce((sum, item) => sum + item.votes, 0);

    const categoryCounts = suggestions.reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const categoryVotes = suggestions.reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + curr.votes;
      return acc;
    }, {} as Record<string, number>);

    return {
      total,
      premiumCount,
      strategicCount,
      basicCount,
      totalVotes,
      categoryCounts,
      categoryVotes
    };
  }, [suggestions]);

  // Icon mapper for categories
  const getCategoryIcon = (category: string, size = 16) => {
    switch (category) {
      case 'Sơn nội thất':
        return <Home size={size} className="text-indigo-600" />;
      case 'Sơn ngoại thất':
        return <Shield size={size} className="text-emerald-600" />;
      case 'Sơn chống thấm':
        return <Shield size={size} className="text-cyan-600" />;
      case 'Bột trét':
        return <Layers size={size} className="text-amber-600" />;
      case 'Sơn trang trí':
        return <Sparkles size={size} className="text-purple-600" />;
      default:
        return <Paintbrush size={size} className="text-slate-600" />;
    }
  };

  const getTierColorClass = (tier: string) => {
    switch (tier) {
      case 'Cao cấp':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Chiến lược':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Cơ bản':
        return 'bg-sky-50 text-sky-800 border-sky-200';
      default:
        return 'bg-slate-50 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#2C3E35] flex flex-col selection:bg-emerald-100 selection:text-emerald-900 pb-12">
      {/* HEADER SECTION */}
      <header className="bg-gradient-to-r from-[#0C3E26] via-[#0A4E35] to-[#125B42] text-white py-10 px-4 shadow-md relative overflow-hidden border-b border-emerald-900">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF9F6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="bg-emerald-800 text-emerald-200 text-xs px-2.5 py-1 rounded-full border border-emerald-700/60 font-medium">
                Cổng bình chọn ý tưởng GAMA 2026
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-white mb-3">
              GAMA Paint <span className="text-amber-300 font-light italic">Voting Portal</span>
            </h1>
            <p className="text-emerald-100 max-w-2xl text-sm md:text-base leading-relaxed font-light">
              Hãy chọn cho những cái tên mà bạn thấy ưng ý nhất!
            </p>
          </div>
        </div>
      </header>

      {/* CORE WORKSPACE */}
      <main className="max-w-7xl w-full mx-auto px-4 mt-8 flex-1 flex flex-col lg:flex-row gap-8">
        
        {/* LEFT COLUMN: STAFF BOOTH & LEADERBOARD */}
        <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0">
          
          {/* STAFF IDENTITY BOOTH */}
          <div id="voter-input-box" className="bg-gradient-to-br from-emerald-50 to-amber-50/50 rounded-2xl border border-emerald-100 p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <UserCheck size={18} className="text-[#0C3E26]" />
              <h3 className="font-serif font-bold text-[#0C3E26] text-base">Thẻ Bình Chọn</h3>
            </div>

            {isEditingVoter ? (
              <form onSubmit={handleSaveVoterName} className="space-y-3">
                <p className="text-xs text-slate-500 leading-normal">
                  Tên người bình chọn kèm vị trí/Phòng ban để ghi nhận bình chọn hợp lệ:
                </p>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    value={tempVoterName}
                    onChange={(e) => setTempVoterName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Xuân Sơn - P. Marketing"
                    className="w-full pl-9 pr-3 py-2 bg-white border border-emerald-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent placeholder-slate-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0C3E26] hover:bg-emerald-900 text-white font-medium text-xs py-2 rounded-xl transition-colors shadow-sm"
                >
                  Xác nhận danh tính bình chọn
                </button>
              </form>
            ) : (
              <div className="bg-white p-3.5 rounded-xl border border-emerald-100/60 flex flex-col justify-between gap-3 shadow-inner">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Nhân viên đang trực</p>
                    <p className="text-sm font-bold text-slate-800 font-serif leading-tight">{voterName}</p>
                  </div>
                  <button
                    onClick={() => {
                      setTempVoterName(voterName);
                      setIsEditingVoter(true);
                    }}
                    className="text-[10px] text-emerald-700 hover:underline font-semibold"
                  >
                    Thay đổi
                  </button>
                </div>
                
                <div className="bg-emerald-50/50 rounded-lg p-2 flex items-center justify-between border border-emerald-100/40">
                  <span className="text-xs text-slate-600 font-medium flex items-center gap-1">
                    <BookmarkCheck size={13} className="text-emerald-700" />
                    Đã bỏ phiếu cho:
                  </span>
                  <span className="font-mono text-xs font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full">
                    {myVotedIds.length} ý tưởng
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* LEADERBOARD CARD */}
          <div className="bg-white rounded-2xl border border-emerald-100/60 p-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-full filter blur-2xl opacity-40 pointer-events-none"></div>
            
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-amber-500 fill-amber-500/10" />
                <h2 className="font-serif font-bold text-emerald-950 text-base">Top Bình Chọn</h2>
              </div>
              <span className="bg-amber-100 text-amber-900 text-[9px] font-mono font-bold px-2 py-0.5 rounded-full">
                {leaderboardMode === 'all' ? 'TOP 5' : 'THEO NHÓM'}
              </span>
            </div>

            {/* Tab switch for Leaderboard Mode */}
            <div className="bg-slate-100 p-0.5 rounded-xl flex items-center border border-slate-200/50 mb-4 shadow-inner">
              <button
                onClick={() => setLeaderboardMode('all')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  leaderboardMode === 'all'
                    ? 'bg-[#0C3E26] text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Toàn bộ
              </button>
              <button
                onClick={() => setLeaderboardMode('group')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  leaderboardMode === 'group'
                    ? 'bg-[#0C3E26] text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Theo nhóm
              </button>
            </div>

            {leaderboardMode === 'all' ? (
              <div className="space-y-3">
                {topVotedBrands.map((item, idx) => {
                  const medalColors = [
                    'bg-amber-400 text-amber-950 border-amber-300 shadow-amber-100',
                    'bg-slate-300 text-slate-900 border-slate-200',
                    'bg-amber-600 text-white border-amber-500',
                    'bg-slate-100 text-slate-600 border-slate-200',
                    'bg-slate-100 text-slate-600 border-slate-200'
                  ];

                  return (
                    <div 
                      key={item.id} 
                      className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Medal Rank */}
                        <span className={`w-6 h-6 shrink-0 rounded-lg flex items-center justify-center font-mono text-xs font-bold border shadow-sm ${medalColors[idx]}`}>
                          {idx + 1}
                        </span>
                        
                        {/* Brand info */}
                        <div className="min-w-0">
                          <p className="font-bold text-sm text-slate-800 font-serif leading-none mb-1 truncate">
                            {item.name}
                          </p>
                          <span className="text-[9px] text-slate-400 font-medium tracking-wide">
                            {item.category} • {item.tier}
                          </span>
                        </div>
                      </div>

                      {/* Votes Count */}
                      <div className="flex items-center gap-1 bg-emerald-50 text-emerald-800 px-2 py-1 rounded-lg border border-emerald-100">
                        <ThumbsUp size={11} className="fill-emerald-800/10" />
                        <span className="font-mono text-xs font-bold leading-none">{item.votes}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
                {topVotedByGroup.map((group) => (
                  <div key={group.category} className="space-y-2 border-b border-slate-100/60 pb-3 last:border-0 last:pb-0">
                    <div className="bg-[#0C3E26]/5 px-2.5 py-1 rounded-lg border border-[#0C3E26]/10 flex justify-between items-center">
                      <span className="text-xs font-bold text-[#0C3E26] font-serif">
                        {group.category}
                      </span>
                    </div>
                    
                    <div className="space-y-1.5 pl-1">
                      {group.tiers.map((tInfo) => {
                        const tierColorMap: Record<string, string> = {
                          'Cao cấp': 'bg-amber-50 text-amber-800 border-amber-200/50',
                          'Chiến lược': 'bg-emerald-50 text-emerald-800 border-emerald-200/50',
                          'Cơ bản': 'bg-blue-50 text-blue-800 border-blue-200/50'
                        };
                        const tierBadgeColor = tierColorMap[tInfo.tier] || 'bg-slate-50 text-slate-700 border-slate-200/50';

                        return (
                          <div 
                            key={tInfo.tier}
                            className="flex items-center justify-between p-1.5 rounded-xl hover:bg-slate-50/80 transition-all border border-transparent hover:border-slate-100"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              {/* Segment / Tier Badge */}
                              <span className={`px-2 py-0.5 rounded-md text-[8px] font-bold border shrink-0 ${tierBadgeColor}`}>
                                {tInfo.tier}
                              </span>
                              
                              <div className="min-w-0">
                                {tInfo.topItem ? (
                                  <p className="font-bold text-xs text-slate-800 font-serif leading-none truncate" title={tInfo.topItem.name}>
                                    {tInfo.topItem.name}
                                  </p>
                                ) : (
                                  <p className="text-[10px] text-slate-400 italic">Chưa có đề xuất</p>
                                )}
                              </div>
                            </div>
                            
                            {/* Votes Count */}
                            {tInfo.topItem && (
                              <div className="flex items-center gap-1 bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded-lg border border-emerald-100 shrink-0">
                                <ThumbsUp size={9} className="fill-emerald-800/10" />
                                <span className="font-mono text-[9px] font-bold leading-none">{tInfo.topItem.votes}</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-4 pt-3 border-t border-slate-100 text-center">
              <p className="text-[10px] text-slate-400 italic">
                Cập nhật tự động dựa trên phiếu bầu thời gian thực
              </p>
            </div>
          </div>

          {/* RECENT VOTING ACTIVITY LOGS */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
              <Flame size={16} className="text-orange-500 fill-orange-500/10" />
              <h3 className="font-serif font-bold text-slate-800 text-sm">Cập Nhật Gần Đây</h3>
            </div>

            <div className="space-y-2.5 max-h-[180px] overflow-y-auto pr-1">
              <AnimatePresence initial={false}>
                {voteHistory.slice(0, 6).map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs p-2 rounded-lg bg-slate-50/50 border border-slate-100 hover:bg-slate-50 flex flex-col gap-0.5"
                  >
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="font-semibold text-emerald-800 truncate max-w-[150px]">{log.voterName}</span>
                      <span className="text-slate-400 font-mono text-[9px]">{log.timestamp}</span>
                    </div>
                    <p className="text-slate-600 font-light">
                      Đã bầu chọn cho <strong className="font-serif font-semibold text-slate-800">{log.brandName}</strong>
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* STATISTICS PANEL */}
          <div className="bg-white rounded-2xl border border-emerald-100/60 p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
              <BarChart3 size={16} className="text-[#0C3E26]" />
              <h2 className="font-serif font-bold text-[#0C3E26] text-sm">Lượng bình chọn</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-100/40 text-center">
                <span className="text-[10px] text-slate-500 font-semibold uppercase block mb-1">Số phiếu</span>
                <span className="font-mono text-xl font-extrabold text-[#0C3E26]">{stats.totalVotes}</span>
              </div>
              <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-100/40 text-center">
                <span className="text-[10px] text-slate-500 font-semibold uppercase block mb-1">Đề xuất</span>
                <span className="font-mono text-xl font-extrabold text-[#0C3E26]">{stats.total}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block mb-2.5 tracking-wider">Theo nhóm sản phẩm</span>
                <div className="space-y-3">
                  {['Sơn nội thất', 'Sơn ngoại thất', 'Sơn chống thấm', 'Bột trét', 'Sơn trang trí'].map(cat => {
                    const votes = stats.categoryVotes[cat] || 0;
                    const count = stats.categoryCounts[cat] || 0;
                    const pct = stats.totalVotes > 0 ? Math.round((votes / stats.totalVotes) * 100) : 0;
                    
                    const progressColors: Record<string, string> = {
                      'Sơn nội thất': 'bg-emerald-600',
                      'Sơn ngoại thất': 'bg-[#0C3E26]',
                      'Sơn chống thấm': 'bg-blue-600',
                      'Bột trét': 'bg-amber-600',
                      'Sơn trang trí': 'bg-purple-600'
                    };
                    const barColor = progressColors[cat] || 'bg-[#0C3E26]';

                    return (
                      <div key={cat} className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-semibold text-slate-800 font-serif">{cat}</span>
                          <span className="text-slate-500 text-[10px] font-mono">
                            <strong className="text-emerald-800 font-semibold">{votes} phiếu</strong> ({count} ý tưởng)
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${barColor} rounded-full transition-all duration-500`} 
                            style={{ width: `${Math.max(pct, votes > 0 ? 3 : 0)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2.5 border-t border-slate-100/80">
                <span className="text-[10px] text-slate-400 font-bold uppercase block mb-2 tracking-wider">Theo phân khúc</span>
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="bg-amber-50/50 rounded-xl p-2 border border-amber-100/30 text-center">
                    <span className="text-[9px] text-slate-500 block">Cao cấp</span>
                    <span className="font-mono text-xs font-bold text-amber-900">{stats.premiumCount}</span>
                  </div>
                  <div className="bg-emerald-50/50 rounded-xl p-2 border border-emerald-100/30 text-center">
                    <span className="text-[9px] text-slate-500 block">Chiến lược</span>
                    <span className="font-mono text-xs font-bold text-emerald-900">{stats.strategicCount}</span>
                  </div>
                  <div className="bg-blue-50/50 rounded-xl p-2 border border-blue-100/30 text-center">
                    <span className="text-[9px] text-slate-500 block">Cơ bản</span>
                    <span className="font-mono text-xs font-bold text-blue-900">{stats.basicCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* RIGHT COLUMN: CONTROL PANEL, FILTERS & MAIN LIST VIEW */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* FILTERS, SEARCH AND DISPLAY MODES */}
          <div className="bg-white p-5 rounded-2xl border border-emerald-100/60 shadow-sm flex flex-col gap-4">
            
            {/* Category selection */}
            <div>
              <div className="flex items-center gap-1.5 mb-2.5">
                <FolderKanban size={13} className="text-slate-400" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Dòng sản phẩm chính</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {paintCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 border ${
                      selectedCategory === cat.id
                        ? 'bg-[#0C3E26] text-white border-[#0C3E26] shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/60'
                    }`}
                  >
                    {cat.id !== 'all' && getCategoryIcon(cat.value || '', 12)}
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[1px] bg-slate-100"></div>

            {/* Tier selection */}
            <div>
              <div className="flex items-center gap-1.5 mb-2.5">
                <SlidersHorizontal size={13} className="text-slate-400" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Cấp phân khúc</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {availableTiers.map(tier => (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedTier(tier.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all border ${
                      selectedTier === tier.id
                        ? 'bg-amber-400 text-emerald-950 border-amber-400 shadow-sm font-semibold'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/60'
                    }`}
                  >
                    {tier.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[1px] bg-slate-100"></div>

            {/* SEARCH, SORT AND DISPLAY MODES BAR (Supplementary) */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-50/50 -mx-1 p-2 rounded-xl border border-slate-100/50">
              
              {/* Search Input */}
              <div className="relative w-full md:max-w-xs">
                <Search className="absolute left-3.5 top-2.5 text-slate-400" size={16} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm theo Tên sơn, Lý do đề xuất..."
                  className="w-full pl-9 pr-4 py-1.5 border border-slate-200 bg-white rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent placeholder-slate-400 shadow-sm"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-2.5 text-[9px] text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 px-1 py-0.5 rounded"
                  >
                    Xóa
                  </button>
                )}
              </div>

              {/* Sort Control */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider whitespace-nowrap">Sắp xếp:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-white shadow-sm border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="votes-desc">Có nhiều phiếu nhất</option>
                  <option value="votes-asc">Có ít phiếu nhất</option>
                  <option value="alphabetical">Tên đề xuất A-Z</option>
                  <option value="default">Theo phân loại</option>
                </select>
              </div>

              {/* View Modes (Polished Segmented Control) */}
              <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                <div className="bg-slate-200/50 p-1 rounded-xl flex items-center border border-slate-200/60 w-full sm:w-auto shadow-inner">
                  <button
                    onClick={() => setViewMode('grid')}
                    title="Xem dạng lưới thẻ"
                    className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      viewMode === 'grid' 
                        ? 'bg-[#0C3E26] text-white shadow-sm' 
                        : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
                    }`}
                  >
                    <Grid size={13} />
                    <span>Dạng lưới</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    title="Xem dạng bảng"
                    className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      viewMode === 'list' 
                        ? 'bg-[#0C3E26] text-white shadow-sm' 
                        : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
                    }`}
                  >
                    <List size={13} />
                    <span>Dạng bảng</span>
                  </button>
                  <button
                    onClick={() => setViewMode('text')}
                    title="Xem định dạng văn bản (Tên - Lý do)"
                    className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      viewMode === 'text' 
                        ? 'bg-[#0C3E26] text-white shadow-sm' 
                        : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
                    }`}
                  >
                    <FileText size={13} />
                    <span>Dạng văn bản</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ACTIVE FILTERS SUMMARY */}
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium px-1">
            <p>
              Tìm thấy <span className="text-[#0C3E26] font-bold font-mono">{filteredSuggestions.length}</span> trên{' '}
              <span className="text-slate-600 font-semibold font-mono">{suggestions.length}</span> ý tưởng đề xuất.
              {(selectedCategory !== 'all' || selectedTier !== 'all' || searchQuery !== '') && (
                <span className="ml-1 text-emerald-600 font-semibold"> (Đã áp dụng bộ lọc)</span>
              )}
            </p>
            {(selectedCategory !== 'all' || selectedTier !== 'all' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedTier('all');
                  setSearchQuery('');
                }}
                className="text-[#0C3E26] hover:underline flex items-center gap-1"
              >
                Xóa tất cả bộ lọc
              </button>
            )}
          </div>

          {/* MAIN CONTAINER FOR LISTING SUGGESTIONS */}
          <div className="flex-1">
            <AnimatePresence mode="popLayout">
              
              {/* IF EMPTY */}
              {filteredSuggestions.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white p-12 rounded-3xl border border-dashed border-slate-200 text-center flex flex-col items-center justify-center min-h-[300px]"
                >
                  <div className="bg-slate-50 p-4 rounded-full mb-3 text-slate-400">
                    <Search size={32} />
                  </div>
                  <h3 className="font-serif font-semibold text-slate-700 text-lg mb-1">Không tìm thấy ý tưởng nào phù hợp</h3>
                  <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-4">
                    Thử đổi từ khóa tìm kiếm khác hoặc điều chỉnh lại bộ lọc dòng sản phẩm và phân khúc.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedTier('all');
                      setSearchQuery('');
                    }}
                    className="bg-emerald-50 hover:bg-emerald-100 text-[#0C3E26] px-4 py-2 rounded-xl text-xs font-bold border border-emerald-100 transition-colors"
                  >
                    Đặt lại tất cả bộ lọc
                  </button>
                </motion.div>
              )}

              {/* 1. GRID VIEW WITH VOTING SUPPORT */}
              {viewMode === 'grid' && filteredSuggestions.length > 0 && (
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {filteredSuggestions.map((item, idx) => {
                    const isVotedByMe = myVotedIds.includes(item.id);
                    return (
                      <motion.div
                        layout
                        key={item.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2, delay: Math.min(idx * 0.02, 0.3) }}
                        className={`bg-white rounded-2xl border ${
                          isVotedByMe ? 'border-emerald-500 shadow-emerald-50 bg-emerald-50/10' : 'border-slate-100 hover:border-emerald-200/60'
                        } shadow-sm hover:shadow-md p-5 flex flex-col justify-between transition-all group relative overflow-hidden`}
                      >
                        {/* Upper Badges */}
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                              {getCategoryIcon(item.category, 12)}
                              {item.category}
                            </span>
                            <span className={`text-[9px] font-semibold font-mono tracking-wider px-2 py-0.5 rounded-md border ${getTierColorClass(item.tier)}`}>
                              {item.tier}
                            </span>
                          </div>

                          {/* Brand Name & Vote Count Pill on header */}
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                              <span className="font-serif font-semibold">{item.name}</span>
                            </h3>
                            
                            {/* Score Display */}
                            <div className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border transition-all ${
                              isVotedByMe 
                                ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm' 
                                : 'bg-slate-50 border-slate-200/70 text-slate-600'
                            }`}>
                              <ThumbsUp size={11} className={isVotedByMe ? 'fill-white' : ''} />
                              <span className="font-mono">{item.votes}</span>
                            </div>
                          </div>

                          {/* Slogan (if exists) */}
                          {item.slogan && (
                            <p className="text-emerald-800 italic text-xs font-medium bg-emerald-50/70 py-1 px-2.5 rounded-lg border border-emerald-100/40 mb-2.5 inline-block">
                              "{item.slogan}"
                            </p>
                          )}

                          {/* Reason / Meaning description */}
                          <div className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 bg-slate-50/40 p-3 rounded-xl border border-slate-100 pl-3">
                            <p className="font-medium text-slate-400 text-[9px] uppercase tracking-wider mb-1 flex items-center gap-1">
                              <Info size={10} /> Ý nghĩa & Lý do:
                            </p>
                            <span className="text-slate-700 font-sans">{item.reason}</span>
                          </div>
                        </div>

                        {/* Card Footer Actions with Vote Button */}
                        <div className="flex items-center justify-between pt-3.5 border-t border-slate-100">
                          {/* Vote Action */}
                          <button
                            onClick={() => handleVote(item.id, item.name)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 border cursor-pointer ${
                              isVotedByMe
                                ? 'bg-emerald-600 hover:bg-emerald-700 border-emerald-600 text-white shadow-sm'
                                : 'bg-white hover:bg-emerald-50/50 hover:text-emerald-900 text-slate-700 border-slate-200'
                            }`}
                          >
                            <ThumbsUp size={13} className={isVotedByMe ? 'fill-white' : ''} />
                            {isVotedByMe ? 'Đã bình chọn' : 'Bình chọn'}
                          </button>

                          {/* Quick copy of Structure */}
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => copyToClipboard(`${item.name} - ${item.reason}`, `Đã copy đề xuất: ${item.name}`)}
                              className="p-1.5 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-lg border border-transparent hover:border-slate-200"
                              title="Sao chép cấu trúc chuẩn hóa Tên - Lý do"
                            >
                              <Copy size={13} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

              {/* 2. LIST VIEW WITH VOTING SUPPORT */}
              {viewMode === 'list' && filteredSuggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-slate-50 text-slate-400 uppercase text-[10px] tracking-wider font-bold border-b border-slate-100">
                          <th className="py-4 px-5">Tên đề xuất</th>
                          <th className="py-4 px-4">Dòng sản phẩm</th>
                          <th className="py-4 px-4">Phân khúc</th>
                          <th className="py-4 px-5">Số phiếu</th>
                          <th className="py-4 px-5 w-[45%]">Ý nghĩa & Lý do</th>
                          <th className="py-4 px-5 text-right">Bỏ phiếu</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-sm">
                        {filteredSuggestions.map((item) => {
                          const isVotedByMe = myVotedIds.includes(item.id);
                          return (
                            <tr key={item.id} className={`hover:bg-slate-50/50 transition-colors ${isVotedByMe ? 'bg-emerald-50/10' : ''}`}>
                              {/* Brand Name */}
                              <td className="py-3 px-5 font-bold text-slate-900 whitespace-nowrap">
                                <span className="font-serif text-base text-[#0C3E26]">{item.name}</span>
                                {item.slogan && (
                                  <p className="text-[10px] text-slate-400 font-normal italic mt-0.5">"{item.slogan}"</p>
                                )}
                              </td>
                              {/* Category */}
                              <td className="py-3 px-4 whitespace-nowrap">
                                <span className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                                  {getCategoryIcon(item.category, 12)}
                                  {item.category}
                                </span>
                              </td>
                              {/* Tier Badge */}
                              <td className="py-3 px-4 whitespace-nowrap">
                                <span className={`text-[10px] font-semibold font-mono tracking-wider px-2 py-0.5 rounded border ${getTierColorClass(item.tier)}`}>
                                  {item.tier}
                                </span>
                              </td>
                              {/* Vote Score */}
                              <td className="py-3 px-5 whitespace-nowrap">
                                <span className="font-mono font-bold text-sm text-slate-800 bg-slate-100 px-2 py-0.5 rounded-lg border border-slate-200/40">
                                  {item.votes} phiếu
                                </span>
                              </td>
                              {/* Reason / Description */}
                              <td className="py-3 px-5 text-xs text-slate-600 leading-relaxed">
                                {item.reason}
                              </td>
                              {/* Vote Action Button */}
                              <td className="py-3 px-5 text-right whitespace-nowrap">
                                <div className="flex items-center justify-end gap-2">
                                  <button
                                    onClick={() => handleVote(item.id, item.name)}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 border transition-all ${
                                      isVotedByMe 
                                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm' 
                                        : 'bg-white hover:bg-emerald-50/50 text-slate-700 border-slate-200'
                                    }`}
                                  >
                                    <ThumbsUp size={11} className={isVotedByMe ? 'fill-white' : ''} />
                                    {isVotedByMe ? 'Đã bầu' : 'Bình chọn'}
                                  </button>
                                  
                                  <button
                                    onClick={() => copyToClipboard(`${item.name} - ${item.reason}`, `Đã copy đề xuất: ${item.name}`)}
                                    className="p-1.5 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-lg border border-transparent"
                                    title="Copy cấu trúc Tên - Lý do"
                                  >
                                    <Copy size={12} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* 3. PLAIN TEXT VIEW (FOR EASY BULK COPY & EXPORT) */}
              {viewMode === 'text' && filteredSuggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6"
                >
                  {/* Explanatory Banner */}
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 mb-4 flex items-start gap-3">
                    <FileCheck2 className="text-[#0C3E26] shrink-0 mt-0.5" size={18} />
                    <div className="text-xs">
                      <h4 className="font-bold text-[#0C3E26] mb-1">Những cái tên gợi ý</h4>
                      <p className="text-slate-600 leading-relaxed text-[11px]">
                        Danh sách chọn lọc theo cấu trúc <strong className="text-slate-800">[Tên] - [Lý do]</strong> kèm <strong className="text-emerald-800">Số phiếu bình chọn thực tế</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Text area style container */}
                  <div className="relative group bg-[#FCFAF7] border border-slate-200 rounded-2xl p-5 shadow-inner">
                    
                    {/* Copy All Floating button */}
                    <button
                      onClick={() => handleCopyFullList(filteredSuggestions)}
                      className="absolute right-4 top-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 shadow-sm transition-all active:scale-95 z-10"
                    >
                      <Copy size={12} />
                      Copy văn bản kèm số phiếu
                    </button>

                    {/* Styled list */}
                    <div className="max-h-[450px] overflow-y-auto pr-2 space-y-3 font-mono text-xs md:text-sm text-slate-700 leading-relaxed">
                      {filteredSuggestions.map((item, index) => (
                        <div 
                          key={item.id} 
                          className="p-2.5 rounded-lg hover:bg-emerald-50/40 transition-colors border-b border-slate-100 last:border-b-0 group flex items-start gap-2.5"
                        >
                          <span className="text-[#0C3E26] font-bold shrink-0">{index + 1}.</span>
                          <div className="w-full">
                            <span className="font-serif font-bold text-slate-900 text-base">{item.name}</span>
                            <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 border border-emerald-100/40 px-2 py-0.5 rounded-full ml-2">
                              {item.votes} phiếu
                            </span>
                            <span className="text-slate-400 mx-2 font-sans">-</span>
                            <span className="font-sans text-slate-600 text-sm">{item.reason}</span>
                            {item.slogan && (
                              <div className="mt-1 text-[11px] text-emerald-700 font-sans font-medium italic">
                                Slogan: "{item.slogan}"
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions for Text mode */}
                  <div className="mt-4 flex flex-wrap gap-2.5 justify-end">
                    <button
                      onClick={() => handleDownloadTxt(filteredSuggestions)}
                      className="bg-[#0C3E26] hover:bg-emerald-900 text-white font-medium text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow"
                    >
                      <Download size={14} />
                      Tải kết quả
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </main>

      {/* FOOTER SECTION */}
      <footer className="max-w-7xl w-full mx-auto px-4 mt-16 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
        <p className="font-serif text-[#0C3E26] font-semibold text-sm mb-1">GAMA SUN Brand Book 2026</p>
        <p className="font-light">GAMA Marketing Department</p>
      </footer>

      {/* FLOATING TOAST NOTIFICATION */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs md:text-sm px-4.5 py-3 rounded-xl shadow-xl z-50 flex items-center gap-2 border border-slate-800"
          >
            <Check size={16} className="text-emerald-400 fill-emerald-400/10" />
            <span className="font-medium">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
