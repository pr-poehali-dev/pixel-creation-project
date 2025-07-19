import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigationItems = [
    { icon: 'Home', label: 'Главная', active: true },
    { icon: 'TrendingUp', label: 'Трендовое' },
    { icon: 'Search', label: 'Поиск' },
    { icon: 'Users', label: 'Каналы' },
    { icon: 'List', label: 'Плейлисты' },
    { icon: 'History', label: 'История' },
    { icon: 'Library', label: 'Библиотека' },
  ];

  const videoData = [
    {
      id: 1,
      title: 'Изучаем React за 30 минут',
      channel: 'CodeMaster',
      views: '125K',
      time: '2 дня назад',
      duration: '32:15',
      thumbnail: '/img/9b6c72e2-9a86-4894-bb43-e34c499c6bfb.jpg'
    },
    {
      id: 2,
      title: 'Создание электронной музыки в FL Studio',
      channel: 'MusicPro',
      views: '89K',
      time: '1 день назад',
      duration: '45:22',
      thumbnail: '/img/f4f89aa2-2cd9-41d1-b2ec-0d11433cd84c.jpg'
    },
    {
      id: 3,
      title: 'Топ игры 2024 - Обзор и геймплей',
      channel: 'GameZone',
      views: '234K',
      time: '3 дня назад',
      duration: '28:44',
      thumbnail: '/img/0bb6a213-5e50-4e05-b171-21324caf6d67.jpg'
    },
    {
      id: 4,
      title: 'TypeScript для начинающих',
      channel: 'DevSchool',
      views: '67K',
      time: '1 неделя назад',
      duration: '41:33',
      thumbnail: '/img/9b6c72e2-9a86-4894-bb43-e34c499c6bfb.jpg'
    },
    {
      id: 5,
      title: 'Битмейкинг с нуля',
      channel: 'BeatLab',
      views: '156K',
      time: '4 дня назад',
      duration: '35:18',
      thumbnail: '/img/f4f89aa2-2cd9-41d1-b2ec-0d11433cd84c.jpg'
    },
    {
      id: 6,
      title: 'Лучшие стратегии в киберспорте',
      channel: 'ProGamer',
      views: '445K',
      time: '2 дня назад',
      duration: '52:07',
      thumbnail: '/img/0bb6a213-5e50-4e05-b171-21324caf6d67.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-full">
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="p-2">
              <Icon name="Menu" size={20} />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <Icon name="Play" size={16} className="text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Pixel</span>
            </div>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex items-center">
              <div className="flex-1 relative">
                <Input 
                  placeholder="Поиск" 
                  className="w-full pr-4 border-gray-300 focus:border-blue-500 rounded-l-full rounded-r-none border-r-0"
                />
              </div>
              <Button variant="outline" className="px-6 rounded-l-none rounded-r-full border-gray-300 border-l-0">
                <Icon name="Search" size={18} />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="p-2">
              <Icon name="Video" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Icon name="Bell" size={20} />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-blue-600 text-white text-sm">У</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <nav className="p-3">
            <div className="space-y-1">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant={item.active ? "secondary" : "ghost"}
                  className={`w-full justify-start px-3 py-2 h-auto ${
                    item.active ? 'bg-gray-100 hover:bg-gray-200' : 'hover:bg-gray-100'
                  }`}
                >
                  <Icon name={item.icon} size={20} className="mr-6" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Button>
              ))}
            </div>
            
            <div className="border-t border-gray-200 mt-4 pt-4">
              <h3 className="px-3 text-sm font-semibold text-gray-600 mb-2">Подписки</h3>
              <div className="space-y-2">
                {['CodeMaster', 'MusicPro', 'GameZone'].map((channel, index) => (
                  <Button key={index} variant="ghost" className="w-full justify-start px-3 py-2 h-auto">
                    <Avatar className="w-6 h-6 mr-3">
                      <AvatarFallback className="text-xs bg-gray-300">{channel[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{channel}</span>
                  </Button>
                ))}
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Filter Tags */}
            <div className="flex space-x-3 mb-6 overflow-x-auto pb-2">
              {['Все', 'Программирование', 'Музыка', 'Игры', 'Образование', 'Технологии'].map((tag, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={`whitespace-nowrap ${
                    index === 0 ? 'bg-gray-900 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {tag}
                </Button>
              ))}
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {videoData.map((video) => (
                <Card key={video.id} className="group cursor-pointer border-0 shadow-none hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full aspect-video object-cover rounded-lg group-hover:rounded-none transition-all"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="flex mt-3 space-x-3">
                      <Avatar className="w-9 h-9 flex-shrink-0">
                        <AvatarFallback className="text-sm bg-gray-300">{video.channel[0]}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{video.channel}</p>
                        <p className="text-sm text-gray-600">
                          {video.views} просмотров • {video.time}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;