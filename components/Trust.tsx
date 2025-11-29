
import React from 'react';
import { Images } from '../utils/imageAssets';

export const Trust: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 md:gap-16 shadow-2xl relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full translate-x-1/3 -translate-y-1/3 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-700 rounded-full -translate-x-1/3 translate-y-1/3 opacity-50"></div>

                <div className="flex-1 relative z-10">
                    <h2 className="text-3xl font-bold mb-4">保護者様の安心のために</h2>
                    <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                        お子様を預かる責任を第一に考え、セキュリティ対策とインターネットリテラシー教育を徹底しています。
                        不適切なサイトへのアクセス制限はもちろん、ネット上でのマナー指導もカリキュラムに含まれています。
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="bg-blue-700/50 backdrop-blur px-4 py-2 rounded-lg border border-blue-500 text-sm">
                            ✓ フィルタリング導入済み
                        </div>
                        <div className="bg-blue-700/50 backdrop-blur px-4 py-2 rounded-lg border border-blue-500 text-sm">
                            ✓ 入退室通知メール
                        </div>
                        <div className="bg-blue-700/50 backdrop-blur px-4 py-2 rounded-lg border border-blue-500 text-sm">
                            ✓ ネットリテラシー指導
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 relative z-10">
                    <img 
                        src={Images.trust}
                        alt="Safe Environment" 
                        className="rounded-xl shadow-lg border-4 border-blue-400/30 w-full object-cover h-64"
                    />
                </div>
            </div>
        </div>
    </section>
  );
};
