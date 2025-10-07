import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QrCode, TrendingUp, Calendar, ShoppingBag, MessageSquare, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Attendance Rate', value: '85%', icon: TrendingUp, color: 'text-success' },
    { label: 'Sessions Today', value: '3', icon: Calendar, color: 'text-primary' },
    { label: 'Marketplace Items', value: '12', icon: ShoppingBag, color: 'text-accent' },
    { label: 'Unread Messages', value: '5', icon: MessageSquare, color: 'text-muted-foreground' },
  ];

  const quickActions = [
    { title: 'Mark Attendance', desc: 'Scan QR code', icon: QrCode, path: '/attendance' },
    { title: 'Browse Marketplace', desc: 'Buy or sell items', icon: ShoppingBag, path: '/marketplace' },
    { title: 'View Events', desc: 'Upcoming campus events', icon: Calendar, path: '/events' },
    { title: 'Chat with Bot', desc: 'Get assistance', icon: MessageSquare, path: '/study-assistant' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="headline text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card className="p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card
                  className="p-6 cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all group"
                  onClick={() => navigate(action.path)}
                >
                  <action.icon className="h-10 w-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-1">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Recent Activity</h2>
            <Button variant="ghost" size="sm">
              <Bell className="mr-2 h-4 w-4" />
              View All
            </Button>
          </div>
          <Card className="p-6">
            <div className="space-y-4">
              {[
                { time: '2 hours ago', text: 'Attendance marked for COMP101', type: 'success' },
                { time: '5 hours ago', text: 'New event: Tech Talk on AI', type: 'info' },
                { time: '1 day ago', text: 'Marketplace item sold: Textbook', type: 'success' },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className={`w-2 h-2 mt-2 rounded-full ${activity.type === 'success' ? 'bg-success' : 'bg-primary'}`} />
                  <div className="flex-1">
                    <p className="text-sm">{activity.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
