import InputField from "@/app/features/auth/components/InputField";
import React from "react";

const Signup = () => {
  return (
    <div className="mx-auto max-w-sm my-14">
      <h2 className="text-center font-medium text-2xl mb-4">新規登録</h2>
      <form>
        <InputField
          label="ユーザー名"
          name="username"
          type="text"
          placeholder="ユーザー名"
        />
        <InputField
          label="メールアドレス"
          name="email"
          type="email"
          placeholder="メールアドレス"
        />
        <InputField
          label="パスワード"
          name="password"
          type="password"
          placeholder="パスワード"
        />
        <div className="mt-4">
          <button type="submit">登録</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
