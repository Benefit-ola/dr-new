import { stats, } from "@/data";
import { Stat,} from "@/types";



export const StatsStrip = () => (
  <div className="w-full bg-[#FDF8EC] border-y border-[#C9A84C]/20">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
      {stats.map((stat: Stat, i: number) => (
        <div
          key={stat.label}
          className={`px-8 py-6 text-center ${i < stats.length - 1 ? "border-r border-[#C9A84C]/20" : ""}`}
        >
          <p className="text-3xl font-extrabold text-[#1A3A6B] leading-none">{stat.num}</p>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
);