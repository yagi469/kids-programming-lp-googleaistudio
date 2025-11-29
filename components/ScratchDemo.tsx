
import React from 'react';
import { Play, Flag, RotateCcw } from 'lucide-react';
import { Images } from '../utils/imageAssets';

export const ScratchDemo: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Visual Coding</span>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            まるでパズル！<br />
            <span className="text-orange-500">直感的</span>な操作でプログラム
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            難しい英語のコードを覚える必要はありません。<br/>
            カラフルなブロックをくっつけるだけで、自分だけのゲームやアニメーションが動き出します。
          </p>
        </div>

        {/* Scratch Interface Mockup */}
        <div className="max-w-5xl mx-auto bg-slate-100 rounded-xl border-4 border-slate-200 shadow-2xl overflow-hidden transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
          {/* Menu Bar */}
          <div className="bg-indigo-600 h-10 flex items-center px-4 gap-2">
            <span className="font-bold text-white tracking-tight">Scratch</span>
            <div className="flex gap-4 ml-8 text-indigo-200 text-xs font-bold hidden sm:flex">
              <span>ファイル</span>
              <span>編集</span>
              <span>チュートリアル</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row h-[400px] md:h-[500px]">
            {/* Sidebar (Categories) */}
            <div className="w-16 md:w-20 bg-slate-50 border-r border-slate-200 flex flex-col items-center py-4 gap-4 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold shadow-sm cursor-pointer hover:scale-110 transition-transform">動き</div>
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white font-bold shadow-sm cursor-pointer hover:scale-110 transition-transform">見た目</div>
              <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-[10px] text-white font-bold shadow-sm cursor-pointer hover:scale-110 transition-transform">音</div>
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-[10px] text-white font-bold shadow-sm cursor-pointer hover:scale-110 transition-transform">制御</div>
              <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-[10px] text-white font-bold shadow-sm cursor-pointer hover:scale-110 transition-transform">調べる</div>
            </div>

            {/* Block Palette / Script Area */}
            <div className="flex-1 bg-slate-100 p-4 relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
               
               {/* Draggable Blocks Simulation */}
               <div className="relative z-10 space-y-2">
                 {/* Block 1 */}
                 <div className="bg-yellow-500 text-white p-3 rounded-lg rounded-tl-none rounded-bl-lg shadow-md w-max cursor-grab active:cursor-grabbing hover:brightness-110 transition-all transform hover:translate-x-2 flex items-center gap-2 font-bold text-sm">
                    <Flag size={16} fill="white" />
                    <span>がクリックされたとき</span>
                 </div>
                 
                 {/* Block 2 */}
                 <div className="ml-4">
                    <div className="bg-orange-500 text-white p-3 rounded-lg shadow-md w-max cursor-grab active:cursor-grabbing hover:brightness-110 transition-all transform hover:translate-x-2 font-bold text-sm mb-1">
                        <span>ずっと</span>
                    </div>
                    
                    <div className="ml-4 border-l-4 border-orange-300 pl-2 space-y-1">
                         <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md w-max cursor-grab active:cursor-grabbing hover:brightness-110 transition-all transform hover:translate-x-2 font-bold text-sm">
                            <span>10歩動かす</span>
                         </div>
                         <div className="bg-purple-500 text-white p-3 rounded-lg shadow-md w-max cursor-grab active:cursor-grabbing hover:brightness-110 transition-all transform hover:translate-x-2 font-bold text-sm">
                            <span>次のコスチュームにする</span>
                         </div>
                         <div className="bg-yellow-500 text-white p-3 rounded-lg shadow-md w-max cursor-grab active:cursor-grabbing hover:brightness-110 transition-all transform hover:translate-x-2 font-bold text-sm">
                            <span>0.1秒待つ</span>
                         </div>
                    </div>

                    <div className="bg-orange-500 text-white p-3 rounded-lg rounded-t-none shadow-md w-max font-bold text-sm mt-1">
                        <RotateCcw size={14} />
                    </div>
                 </div>
               </div>

               {/* Hand Cursor Decoration */}
               <div className="absolute bottom-10 right-10 animate-bounce hidden md:block">
                  <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-lg text-xs font-bold text-slate-600 mb-2">
                    つなげるだけ！
                  </div>
               </div>
            </div>

            {/* Stage Area */}
            <div className="w-full md:w-[400px] bg-white border-l border-slate-200 flex flex-col">
              {/* Stage Header */}
              <div className="h-10 border-b border-slate-100 flex items-center justify-between px-4">
                 <div className="flex gap-2">
                    <Flag className="text-green-500 cursor-pointer hover:scale-110 transition-transform" />
                    <div className="w-5 h-5 bg-red-500 rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                 </div>
              </div>
              
              {/* Stage Canvas */}
              <div className="flex-1 bg-white relative flex items-center justify-center overflow-hidden group">
                  {/* Background/Backdrop */}
                  <div className="absolute inset-0 bg-blue-50 opacity-50"></div>
                  
                  {/* Sprite (Cat Representation) */}
                  <div className="relative w-24 h-24 transition-transform duration-500 group-hover:translate-x-10 group-hover:rotate-12">
                     <img src={Images.scratchCat} alt="Scratch Cat" className="w-full h-full object-contain drop-shadow-lg" />
                     {/* Speech Bubble */}
                     <div className="absolute -top-12 -right-10 bg-white border-2 border-slate-200 p-2 rounded-xl rounded-bl-none shadow-md animate-pulse">
                        <p className="text-xs font-bold text-slate-800">Hello!</p>
                     </div>
                  </div>
              </div>

              {/* Sprite Pane */}
              <div className="h-24 border-t border-slate-200 p-2 bg-slate-50 flex gap-2 overflow-x-auto">
                 <div className="w-16 h-full bg-blue-100 rounded-lg border-2 border-blue-400 p-1 flex flex-col items-center justify-center">
                    <img src={Images.scratchCat} className="w-8 h-8 object-contain" />
                    <span className="text-[10px] font-bold text-slate-600">スプライト1</span>
                 </div>
                  <div className="w-16 h-full bg-white rounded-lg border border-slate-200 p-1 flex flex-col items-center justify-center opacity-60">
                     <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
