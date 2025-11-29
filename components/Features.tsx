import React from 'react';
import { Gamepad2, Users, Lightbulb, Puzzle } from 'lucide-react';

const featureList = [
  {
    icon: <Gamepad2 className="w-8 h-8 text-white" />,
    title: "遊びが学びに変わる",
    desc: "子供たちが大好きなゲーム作りからスタート。夢中になっているうちに、自然と「順序立てて考える力」が身につきます。",
    color: "bg-orange-400",
    shadow: "shadow-orange-200",
  },
  {
    icon: <Puzzle className="w-8 h-8 text-white" />,
    title: "世界標準のScratch",
    desc: "MITメディアラボが開発したビジュアル言語を使用。英語のタイピングができなくても、パズルのように直感的にコードが組めます。",
    color: "bg-blue-400",
    shadow: "shadow-blue-200",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    title: "「なぜ？」を考える",
    desc: "「なぜ動かないの？」「どうすればもっと面白くなる？」試行錯誤を繰り返すことで、将来役立つ問題解決能力が養われます。",
    color: "bg-yellow-400",
    shadow: "shadow-yellow-200",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "少人数制で安心",
    desc: "講師1名につき生徒4名までの少人数制。一人ひとりのペースや「やりたいこと」に合わせて、丁寧にサポートします。",
    color: "bg-green-400",
    shadow: "shadow-green-200",
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white border-y border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-4">
            Scratch Kids Labの<span className="text-orange-500 underline decoration-wavy decoration-orange-300 underline-offset-4">4つの特徴</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            プログラミングスキルだけでなく、<br/>
            これからの社会で必要とされる「自ら考え、創り出す力」を大切にしています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-2"
            >
              <div className={`${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${feature.shadow} rotate-3 transform transition-transform group-hover:rotate-12 group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};