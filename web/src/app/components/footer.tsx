import { Mails } from "lucide-react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="text-center flex flex-col items-center text-xs text-zinc-700 gap-1">
      <div className="text-zinc-400">Mianpro出品，更懂你的搜索</div>
      <div className="text-zinc-400">MP魔法大模型赋能</div>
      <div className="flex gap-2 justify-center">
        <div>
          <a
            className="text-blue-500 font-medium inline-flex gap-1 items-center flex-nowrap text-nowrap"
            href="mailto:1549947362@qq.com"
          >
            <Mails size={8} />
            联系我们
          </a>
        </div>
        <div>共建AI搜索新生态</div>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 mt-2 text-zinc-400">
        <a className="hover:text-zinc-950" href="https://ai.920pdd.com/">
          Mianpro AI
        </a>
        <a className="hover:text-zinc-950" href="https://s.920pdd.com/">
          服务监控
        </a>
        <a className="hover:text-zinc-950" href="https://ceshi.920pdd.com/">
          Hi导航
        </a>
      </div>
    </div>
  );
};
