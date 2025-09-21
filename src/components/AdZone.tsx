import { cn } from "@/lib/utils";

interface AdZoneProps {
  size?: 'banner' | 'rectangle' | 'leaderboard' | 'mobile-banner';
  className?: string;
  id?: string;
}

const adSizes = {
  banner: 'min-h-[90px] max-w-[728px]',
  rectangle: 'min-h-[250px] max-w-[300px]',
  leaderboard: 'min-h-[90px] max-w-[728px]',
  'mobile-banner': 'min-h-[50px] max-w-[320px]'
};

export function AdZone({ size = 'rectangle', className, id }: AdZoneProps) {
  return (
    <div 
      id={id}
      className={cn(
        "ad-zone animate-fade-in",
        adSizes[size],
        className
      )}
    >
      <div className="text-center">
        <div className="text-xs text-muted-foreground mb-2">Publicidade</div>
        <div className="text-muted-foreground">
          {size === 'banner' || size === 'mobile-banner' 
            ? `AdSense ${size === 'mobile-banner' ? 'Mobile ' : ''}Banner (${size === 'mobile-banner' ? '320x50' : '728x90'})`
            : size === 'leaderboard'
            ? 'AdSense Leaderboard (728x90)'
            : 'AdSense Rectangle (300x250)'
          }
        </div>
      </div>
    </div>
  );
}