import React from 'react';
import { CheckCircle2, AlertCircle, ShieldCheck, TrendingUp } from 'lucide-react';

export const MeritDemerit: React.FC = () => {
  return (
    <section id="merits" className="py-24 bg-orange-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-white border border-slate-200 text-slate-600 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block shadow-sm">
            保護者様の声から
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            正直にお伝えします。<br />
            <span className="text-blue-600">メリット</span>と
            <span className="text-red-500">心配な点</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            大切なお子様の習い事だからこそ、良い点だけでなく、<br/>
            保護者様が心配される点についても包み隠さずご説明します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Merits */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <TrendingUp className="text-blue-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">プログラミングのメリット</h3>
                <p className="text-blue-600 text-sm font-bold">Future Skills</p>
              </div>
            </div>
            
            <ul className="space-y-8 relative z-10">
              {[
                { title: "論理的思考力が身につく", text: "「順序立てて物事を考える」癖がつき、算数の文章題や国語の読解力向上にも良い影響を与えます。" },
                { title: "創造性と自己肯定感", text: "「0から1を生み出す」経験と、「思い通りに動いた！」という成功体験が、お子様の自信を大きく育てます。" },
                { title: "将来への備え", text: "2020年から小学校で必修化。IT社会を生き抜くための基礎リテラシーを、楽しみながら自然に習得できます。" },
                { title: "粘り強さ（グリット）", text: "エラー（失敗）は悪いことではありません。修正して解決する過程で、諦めずに挑戦し続ける力が養われます。" }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mt-1 shadow-md">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2 text-lg">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Demerits & Solutions */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-red-100 relative overflow-hidden group">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-red-100 transition-colors"></div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="bg-red-100 p-4 rounded-2xl">
                <AlertCircle className="text-red-500 w-8 h-8" />
              </div>
               <div>
                <h3 className="text-2xl font-bold text-slate-800">よくある心配と対策</h3>
                <p className="text-red-500 text-sm font-bold">Our Solutions</p>
              </div>
            </div>
            
            <div className="space-y-6 relative z-10">
              {[
                { 
                  worry: "パソコン画面の見過ぎによる視力が心配...", 
                  solution: "50分の授業の中で、必ず10分間の「アイブレイク（目を休める時間）」を設けています。また、画面との適切な距離や姿勢の指導も徹底しています。" 
                },
                { 
                  worry: "ただのゲーム遊びで終わらない？", 
                  solution: "当教室は独自のカリキュラムに基づき、毎回の授業に「学習目標（ループ処理、変数など）」を設定しています。遊びの楽しさを入り口に、しっかりとした概念習得を目指します。" 
                },
                { 
                  worry: "うまくいかなくてイライラしないか...", 
                  solution: "講師はすぐに答えを教えず、適切な「ヒント」を出してサポートします。自分で壁を乗り越える経験を積むことで、感情のコントロールと達成感を得られるよう導きます。" 
                }
              ].map((item, i) => (
                <div key={i} className="bg-orange-50/50 rounded-2xl p-5 border border-orange-100 hover:border-orange-200 transition-colors">
                  <h4 className="font-bold text-slate-700 mb-3 flex items-start gap-2">
                    <span className="text-red-400 text-lg">●</span>
                    {item.worry}
                  </h4>
                  <div className="flex gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <ShieldCheck className="text-green-500 w-6 h-6 flex-shrink-0" />
                    <div className="text-slate-700 text-sm font-medium leading-relaxed">
                      <span className="text-green-600 font-bold block text-xs mb-1 uppercase tracking-wider">Solution</span>
                      {item.solution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};