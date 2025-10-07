import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, QrCode, ShoppingBag, Calendar, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import upsaLogoFull from '@/assets/upsa-logo-full.jpg';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    { icon: QrCode, title: 'Smart Attendance', desc: 'QR-based attendance tracking' },
    { icon: ShoppingBag, title: 'Marketplace', desc: 'Buy & sell campus items' },
    { icon: Calendar, title: 'Events', desc: 'Stay updated with campus events' },
    { icon: Bot, title: 'UPSA Bot', desc: 'AI-powered assistant' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-accent/20 via-accent/5 to-transparent blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src={upsaLogoFull}
            alt="UPSA IT2 Group 10"
            className="w-64 h-auto mx-auto object-contain"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="headline text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
        >
          UPSA Campus Hub
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl"
        >
          Attendance, campus marketplace, and reminders — built for UPSA students.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Button
            size="lg"
            onClick={() => navigate('/auth/signin')}
            className="text-lg px-8 py-6 group"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/dashboard')}
            className="text-lg px-8 py-6"
          >
            <Users className="mr-2 h-5 w-5" />
            Continue as Guest
          </Button>
        </motion.div>

        {/* Role Selection Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-sm text-muted-foreground mb-12"
        >
          <p>Choose your account type: Student • Lecturer • Admin</p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all cursor-pointer"
            >
              <feature.icon className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-1 text-sm">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
