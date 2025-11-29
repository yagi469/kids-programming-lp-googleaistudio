import React from 'react';
import { Calendar, ChevronRight, Clock, Monitor, MessageCircle } from 'lucide-react';

export const Reservation: React.FC = () => {
  return (
    <section id="reservation" className="py-24 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">
          まずは<span className="text-yellow-300">無料体験</span>で、<br/>
          お子様の「できた！」を見てみませんか？
        </h2>
        <p className="text-orange-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          パソコンは教室ですべて用意しています。<br />
          手ぶらで、遊びに行く感覚でお越しください。
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Flow Steps */}
            <div className="text-left">
              <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
                <Calendar className="w-7 h-7 text-yellow-300" />
                体験会のながれ（約60分）
              </h3>
              <div className="space-y-6 relative">
                 <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-orange-200/30"></div>
                 
                {[
                    { icon: <Monitor size={18} />, title: "基本操作レクチャー", time: "10分", desc: "マウスの持ち方から優しく教えます" },
                    { icon: <Clock size={18} />, title: "ゲーム作り体験", time: "35分", desc: "自分だけのゲームを作って動かそう！" },
                    { icon: <MessageCircle size={18} />, title: "フィードバック", time: "15分", desc: "保護者様へ学習効果のご説明" }
                ].map((step, i) => (
                    <div key={i} className="relative flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold z-10 shadow-lg border-2 border-orange-300">
                            {i + 1}
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-bold text-lg">{step.title}</h4>
                                <span className="text-xs bg-orange-800/30 px-2 py-0.5 rounded text-orange-100 flex items-center gap-1">
                                    {step.icon} {step.time}
                                </span>
                            </div>
                            <p className="text-orange-100 text-sm">{step.desc}</p>
                        </div>
                    </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="flex flex-col gap-6">
                <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-xl transform transition-transform hover:scale-105 duration-300 border-4 border-orange-200/50">
                    <p className="text-center text-sm text-orange-600 font-bold mb-3 tracking-widest uppercase">Reserve Now</p>
                    <button className="w-full py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-xl md:text-2xl shadow-lg hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-2 group mb-4">
                        無料体験を予約する
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-xs text-slate-400">
                        ※ Webフォームへ移動します（24時間受付）
                    </p>
                </div>
                <div className="text-center space-y-2">
                    <p className="text-sm font-medium text-orange-100 bg-orange-800/20 py-2 px-4 rounded-full inline-block">
                         無理な勧誘は一切ございません。
                    </p>
                    <p className="text-xs text-orange-200">
                        お席には限りがございます。お早めにお申し込みください。
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};