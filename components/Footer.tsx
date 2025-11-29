import React from 'react';
import { Rocket, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-slate-800 text-white p-2 rounded-lg">
                <Rocket size={20} />
              </div>
              <span className="font-bold text-xl text-white">Scratch Kids Lab</span>
            </div>
            <p className="text-sm text-slate-400 mb-4 max-w-sm">
              子供たちの創造性を解き放つ、未来志向のプログラミング教室。
              一人ひとりのペースに合わせた指導で、「創る楽しさ」を伝えます。
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">リンク</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">特徴</a></li>
              <li><a href="#merits" className="hover:text-white transition-colors">メリット・デメリット</a></li>
              <li><a href="#ai-consultant" className="hover:text-white transition-colors">AI相談室</a></li>
              <li><a href="#reservation" className="hover:text-white transition-colors">体験予約</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">お問い合わせ</h3>
            <ul className="space-y-2 text-sm">
              <li>平日: 10:00 - 19:00</li>
              <li>土日: 09:00 - 18:00</li>
              <li className="mt-2 text-slate-500">※祝日はお休みです</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Scratch Kids Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};