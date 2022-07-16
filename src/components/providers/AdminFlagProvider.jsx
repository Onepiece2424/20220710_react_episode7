import { createContext } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = (props) => {
  const { children } = props;

  //動作確認のために適当なオブジェクトを定義
  const sample0bj = { sampleValue: "テスト" };

  //AdminFlagContextの中にProviderがあるのでそれでchildrenを囲む
  //valueの中にグローバルに扱う値を設定
  return (
    <AdminFlagContext.Provider value={sample0bj}>
      {children}
    </AdminFlagContext.Provider>
  );
};
