
// 画像を一元管理するファイルです。
// 将来的にローカル画像に差し替える場合は、ここにパス（例: "/images/hero.jpg"）を指定してください。

export const Images = {
  // ヒーローセクション（トップ）の画像
  hero: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=2074&auto=format&fit=crop", 

  // 信頼性セクション（先生と生徒）
  trust: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", 

  // スクラッチデモ用の猫（Wikimedia Commons）
  scratchCat: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Scratch_cat_large.svg/1200px-Scratch_cat_large.svg.png",

  // ギャラリーセクションの画像リスト
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1581092921461-eab62e97a78e?q=80&w=2070&auto=format&fit=crop",
      title: "みんなで学ぶ楽しさ",
      desc: "お友達の作品を見て刺激を受けたり、教え合ったり。仲間がいるから頑張れます。"
    },
    {
      src: "https://images.unsplash.com/photo-1596496050844-3613e3ffa280?q=80&w=2070&auto=format&fit=crop",
      title: "「できた！」の笑顔",
      desc: "自分の書いたプログラムが動いた瞬間。この達成感が、次の挑戦へのエネルギーになります。"
    },
    {
      src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
      title: "真剣な眼差し",
      desc: "遊びのように見えて、頭の中はフル回転。論理的に考える力が自然と育まれています。"
    }
  ]
};
