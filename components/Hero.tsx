
import React from 'react';
import { ArrowRight, Sparkles, MousePointerClick } from 'lucide-react';
import { Images } from '../utils/imageAssets';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Blobs - Warmer colors */}
      <div className="blob bg-orange-300 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/4 -translate-y-1/4 mix-blend-multiply opacity-50"></div>
      <div className="blob bg-yellow-300 w-96 h-96 rounded-full bottom-0 right-0 translate-x-1/4 translate-y-1/4 mix-blend-multiply opacity-50 animation-delay-2000"></div>
      <div className="blob bg-pink-300 w-64 h-64 rounded-full top-1/2 right-1/4 mix-blend-multiply opacity-40 animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-orange-200 rounded-full px-4 py-1.5 mb-8 shadow-sm animate-bounce duration-[3000ms]">
            <Sparkles className="text-orange-500 w-4 h-4" />
            <span className="text-sm font-bold text-orange-600">
              春の体験レッスン受付中！
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
            <span className="text-orange-500 inline-block transform hover:scale-105 transition-transform">「好き」</span>を
            <span className="text-blue-500 inline-block transform hover:scale-105 transition-transform">「自信」</span>に変える<br />
            はじめてのプログラミング
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            ゲームやアニメーション作りを通じて、<br className="sm:hidden"/>
            <b>「論理的思考力」</b>と<b>「創造力」</b>を育みます。<br/>
            Scratch Kids Labは、失敗を恐れずに挑戦する心を応援する教室です。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#reservation"
              className="group w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MousePointerClick className="w-5 h-5 group-hover:animate-ping" />
              無料で体験してみる
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <a 
              href="#features"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-orange-50 text-slate-700 border border-slate-200 hover:border-orange-200 rounded-full font-bold text-lg shadow-sm transition-all"
            >
              教室の特徴を見る
            </a>
          </div>
        </div>

        {/* Hero Image Mockup with Animation */}
        <div className="mt-16 md:mt-24 relative animate-float">
          <div className="bg-white p-3 md:p-4 rounded-3xl shadow-2xl mx-auto max-w-5xl transform md:rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-orange-100">
            <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-video relative flex items-center justify-center group">
             {/* Updated Image: Loading from centralized assets */}
             <img 
              src={Images.hero}
              alt="Happy Kid Programming" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-6 md:p-10">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform max-w-sm">
                  <p className="text-orange-600 font-bold text-sm md:text-lg flex items-center gap-2">
                    <span className="bg-orange-100 p-1 rounded-md">✨</span>
                    「わかった！」の瞬間が、<br/>
                    未来への扉を開きます。
                  </p>
                </div>
             </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 md:right-0 bg-yellow-400 text-white p-4 rounded-full shadow-lg font-bold transform rotate-12 hidden md:block animate-bounce">
            PC初心者<br/>大歓迎！
          </div>
          <div className="absolute -bottom-5 -left-10 bg-blue-400 text-white p-3 rounded-full shadow-lg font-bold transform -rotate-6 hidden md:block">
             体験満足度<br/>98%！
          </div>
        </div>
      </div>
    </section>
  );
};
