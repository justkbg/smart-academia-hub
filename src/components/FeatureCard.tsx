
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0 
}) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 hover-lift animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center mb-5">
        <Icon className="h-6 w-6 text-upsa-blue" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
