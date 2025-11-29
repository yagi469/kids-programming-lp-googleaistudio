import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Sparkles, Loader2, Bot, HelpCircle } from 'lucide-react';

export const AiConsultant: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sampleQuestions = [
    "パソコン初心者でも大丈夫？",
    "算数が苦手でもできる？",
    "女の子でも楽しめる？",
    "どんな力が身につくの？"
  ];

  const handleAsk = async (e?: React.FormEvent, customQ?: string) => {
    if (e) e.preventDefault();
    const q = customQ || question;
    if (!q.trim()) return;

    if (customQ) setQuestion(customQ);

    setLoading(true);
    setError(null);
    setAnswer(null);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `
        あなたは「Scratch Kids Lab」という子供向けプログラミング教室のベテラン講師（ヘッドコーチ）です。
        保護者からの、プログラミング教育や子供の学習に関する不安や質問に答えてください。
        
        回答のルール:
        1. 非常に親切で、温かく、共感的なトーンで話してください。親御さんの不安に寄り添ってください。
        2. 保護者の不安を取り除くように、具体的でポジティブなアドバイスをしてください。
        3. 回答は簡潔に、読みやすい日本語で、300文字以内でまとめてください。
        4. 必要に応じて、Scratchを使うことのメリット（論理的思考、創造性など）に触れてください。
        5. 最後に「まずは気軽に無料体験で、お子様の様子を見てみませんか？」というニュアンスで締めくくってください。
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: q,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
        }
      });

      setAnswer(response.text || "申し訳ありません。回答を生成できませんでした。");

    } catch (err) {
      console.error(err);
      setError("現在、AI相談室は混み合っております。時間をおいて再度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,_rgba(255,237,213,0.4),_transparent)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-lg mb-6 animate-float">
            <Bot className="w-10 h-10 text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            AIヘッドコーチに<br/><span className="text-indigo-600">お悩み相談</span>
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto">
            「うちの子に向いてるかな？」「まだ早いかな？」<br/>
            そんなちょっとした不安を、24時間いつでも当教室のAIコーチに聞いてみましょう。
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-indigo-100 relative">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-orange-400 rounded-t-3xl"></div>

            {/* Chat Interface */}
            <div className="flex flex-col gap-8">
                {/* Result Area */}
                {answer && (
                    <div className="flex gap-4 animate-fade-in bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                            <Bot size={24} />
                        </div>
                        <div className="text-slate-700 leading-relaxed">
                            <p className="text-xs font-bold text-indigo-500 mb-1">AIヘッドコーチからの回答</p>
                            <p className="whitespace-pre-wrap">{answer}</p>
                        </div>
                    </div>
                )}

                 {/* Error Area */}
                 {error && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm text-center">
                        {error}
                    </div>
                )}

                {/* Input Area */}
                <div className="space-y-6">
                    {!answer && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {sampleQuestions.map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleAsk(undefined, q)}
                                    disabled={loading}
                                    className="text-left text-sm p-3 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-600 hover:text-indigo-700 border border-slate-200 hover:border-indigo-200 transition-all flex items-center gap-2 group"
                                >
                                    <HelpCircle size={16} className="text-slate-400 group-hover:text-indigo-500" />
                                    {q}
                                </button>
                            ))}
                        </div>
                    )}

                    <form onSubmit={handleAsk} className="relative">
                        <label htmlFor="question" className="block text-sm font-bold text-slate-700 mb-2">
                            自由に入力して質問する
                        </label>
                        <div className="relative group">
                            <textarea
                                id="question"
                                rows={3}
                                className="w-full rounded-2xl border-slate-200 bg-white border-2 focus:border-indigo-500 focus:ring-0 p-4 pr-16 text-slate-800 resize-none transition-all shadow-sm group-hover:border-indigo-300 placeholder:text-slate-300"
                                placeholder="例：引っ込み思案な性格ですが、馴染めますか？"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                disabled={loading}
                            />
                            <button
                                type="submit"
                                disabled={loading || !question.trim()}
                                className="absolute bottom-3 right-3 p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            >
                                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
                            </button>
                        </div>
                        <p className="text-xs text-slate-400 mt-2 text-right flex items-center justify-end gap-1">
                            <Sparkles size={12} />
                            Powered by Gemini 2.5
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};