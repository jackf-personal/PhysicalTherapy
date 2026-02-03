import { motion } from "framer-motion";
import { type LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative p-8 rounded-3xl",
        "bg-white border border-gray-100",
        "hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
        "transition-all duration-300 ease-out overflow-hidden"
      )}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-7 h-7" />
        </div>
        
        <h3 className="text-xl font-bold font-display text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
        
        <div className="flex items-center text-sm font-semibold text-primary gap-2 cursor-pointer group/link">
          Learn more 
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}
