
import React from 'react';
import { Images } from '../utils/imageAssets';

export const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Atmosphere</span>
          <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-4">
            教室の<span className="text-orange-500">雰囲気</span>
          </h2>
          <p className="text-slate-600">
            明るく開放的な教室で、のびのびと学んでいます。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Images.gallery.map((img, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-bold p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        {img.title}
                    </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-800 mb-2">{img.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decor */}
        <div className="mt-12 flex justify-center">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-orange-100 text-slate-600 text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                保護者様の見学もいつでも歓迎しています
            </div>
        </div>
      </div>
    </section>
  );
};
