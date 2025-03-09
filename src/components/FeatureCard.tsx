
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkTo?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  linkTo,
  delay = 0 
}) => {
  const navigate = useNavigate();
  
  const handleLearnMore = () => {
    if (linkTo) {
      navigate(linkTo);
    }
  };
  
  return (
    <div 
      className="glass-card rounded-xl p-6 hover-lift animate-fade-in-up transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-upsa-blue/20"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-12 w-12 rounded-lg bg-upsa-blue/10 flex items-center justify-center mb-5 group-hover:bg-upsa-blue/20 transition-colors">
        <Icon className="h-6 w-6 text-upsa-blue" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {linkTo && (
        <Button 
          variant="ghost" 
          className="px-0 text-upsa-blue hover:text-upsa-blue/80 hover:bg-transparent"
          onClick={handleLearnMore}
        >
          Learn More →
        </Button>
      )}
    </div>
  );
};

export default FeatureCard;
