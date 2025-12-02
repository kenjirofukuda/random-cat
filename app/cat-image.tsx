"use client"; // (1)
import { useState } from "react";
import { fetchImage } from "./fetch-image";
// コンポーネントの引数を定義する
type CatImageProps = {
  url: string;
};

// 画像を表示するコンポーネント
export function CatImage({ url }: CatImageProps) {
  // (2) useStateを使って状態を管理
  const [imageUrl, setImageUrl] = useState<string>(url);

  // (3) 画像情報を取得する関数を定義
  const refreshImage = async () => {
    setImageUrl("");
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return (
    <div>
      {/* (4) ボタンの表示 */}
      <button onClick={refreshImage}>他のにゃんこも見る</button>
      {/* (5) 画像表示 */}
      {imageUrl && <img src={imageUrl} />}
    </div>
  );
}
