import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      id: 1,
      stars: 100,
      price: 149,
      discount: 0,
      popular: false,
      features: ['Мгновенная доставка', 'Гарантия возврата', 'Техподдержка 24/7']
    },
    {
      id: 2,
      stars: 500,
      price: 699,
      discount: 15,
      popular: true,
      features: ['Мгновенная доставка', 'Гарантия возврата', 'Техподдержка 24/7', 'Бонус +50 звёзд']
    },
    {
      id: 3,
      stars: 1000,
      price: 1299,
      discount: 20,
      popular: false,
      features: ['Мгновенная доставка', 'Гарантия возврата', 'Техподдержка 24/7', 'Бонус +100 звёзд', 'VIP поддержка']
    },
    {
      id: 4,
      stars: 2500,
      price: 2999,
      discount: 25,
      popular: false,
      features: ['Мгновенная доставка', 'Гарантия возврата', 'Техподдержка 24/7', 'Бонус +300 звёзд', 'VIP поддержка', 'Персональный менеджер']
    }
  ];

  const reviews = [
    { id: 1, name: 'Алексей М.', rating: 5, text: 'Быстро, надёжно, дёшево! Заказываю уже третий раз, всё отлично!', date: '2 дня назад' },
    { id: 2, name: 'Мария К.', rating: 5, text: 'Лучшие цены на рынке! Доставка моментальная, спасибо!', date: '5 дней назад' },
    { id: 3, name: 'Дмитрий П.', rating: 5, text: 'Отличный сервис, техподдержка реально работает 24/7. Рекомендую!', date: '1 неделю назад' },
    { id: 4, name: 'Екатерина С.', rating: 5, text: 'Заказала 1000 звёзд с бонусами - пришло всё за 5 минут! Супер!', date: '2 недели назад' }
  ];

  const faqs = [
    {
      q: 'Как быстро приходят звёзды после оплаты?',
      a: 'Звёзды поступают на ваш аккаунт мгновенно после подтверждения платежа — обычно это занимает от 30 секунд до 5 минут.'
    },
    {
      q: 'Есть ли гарантия возврата средств?',
      a: 'Да, мы предоставляем 100% гарантию возврата средств в течение 24 часов, если звёзды не поступили на ваш аккаунт.'
    },
    {
      q: 'Безопасно ли покупать звёзды у вас?',
      a: 'Абсолютно! Мы используем официальные методы доставки и никогда не запрашиваем пароль от вашего аккаунта. Ваши данные защищены.'
    },
    {
      q: 'Какие способы оплаты вы принимаете?',
      a: 'Мы принимаем оплату картами Visa/MasterCard/Mir, СБП, электронные кошельки и криптовалюту.'
    },
    {
      q: 'Что делать, если возникла проблема?',
      a: 'Наша техподдержка работает 24/7! Напишите нам в Telegram или на email, и мы решим любую проблему в течение 15 минут.'
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Star" className="w-8 h-8 text-primary fill-primary" />
            <span className="text-2xl font-bold text-gradient">TeleStars</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('catalog')} className="text-sm hover:text-primary transition-colors">Каталог</button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjE1LDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 px-6 py-2.5 rounded-full mb-8 animate-fade-in shadow-lg shadow-primary/20">
            <Icon name="Zap" className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Лучшие цены на Telegram Stars</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-in leading-tight">
            <span className="bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">Покупай звёзды</span><br />
            <span className="bg-gradient-to-r from-secondary via-white to-secondary bg-clip-text text-transparent">дёшево и быстро</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto animate-fade-in font-light">
            Самые выгодные цены • Доставка за 30 секунд • Гарантия 100% • Поддержка 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-scale-in">
            <Button size="lg" onClick={() => scrollToSection('catalog')} className="bg-gradient-to-r from-primary via-yellow-400 to-primary text-primary-foreground hover:shadow-2xl hover:shadow-primary/50 text-lg px-10 py-7 font-bold transition-all duration-300 hover:scale-105 animate-glow">
              <Icon name="Star" className="w-6 h-6 mr-2 fill-current" />
              Купить звёзды
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('faq')} className="text-lg px-10 py-7 border-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105">
              <Icon name="Sparkles" className="w-5 h-5 mr-2" />
              Узнать больше
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-5xl mx-auto">
            <Card className="group bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur border-primary/30 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-110">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="relative inline-block mb-5">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all duration-500" />
                  <Icon name="Zap" className="relative w-14 h-14 text-primary mx-auto" />
                </div>
                <h3 className="font-bold text-2xl mb-3 bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Моментально</h3>
                <p className="text-foreground/70 text-base">Доставка за 30 секунд после оплаты</p>
              </CardContent>
            </Card>
            <Card className="group bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur border-accent/30 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:scale-110">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="relative inline-block mb-5">
                  <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/40 transition-all duration-500" />
                  <Icon name="ShieldCheck" className="relative w-14 h-14 text-accent mx-auto" />
                </div>
                <h3 className="font-bold text-2xl mb-3 bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">Безопасно</h3>
                <p className="text-foreground/70 text-base">Защита аккаунта и личных данных</p>
              </CardContent>
            </Card>
            <Card className="group bg-gradient-to-br from-card via-card to-secondary/5 backdrop-blur border-secondary/30 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 hover:scale-110">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="relative inline-block mb-5">
                  <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full group-hover:bg-secondary/40 transition-all duration-500" />
                  <Icon name="Headphones" className="relative w-14 h-14 text-secondary mx-auto" />
                </div>
                <h3 className="font-bold text-2xl mb-3 bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">Поддержка 24/7</h3>
                <p className="text-foreground/70 text-base">Всегда готовы помочь в любое время</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <Badge className="bg-primary/20 text-primary border border-primary/50 px-4 py-1.5 text-sm font-semibold">ТАРИФЫ</Badge>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-5">
              <span className="bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">Выгодные тарифы</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 font-light">Чем больше покупаешь — тем больше экономишь</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`group relative overflow-hidden transition-all duration-500 hover:scale-110 ${
                  plan.popular ? 'border-primary border-2 shadow-2xl shadow-primary/30 bg-gradient-to-br from-card via-primary/5 to-card' : 'border-border hover:border-primary/60 bg-gradient-to-br from-card to-card hover:shadow-xl hover:shadow-primary/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-primary via-yellow-400 to-primary text-primary-foreground font-bold px-4 py-1.5 shadow-lg shadow-primary/50 animate-pulse">⭐ ПОПУЛЯРНЫЙ</Badge>
                  </div>
                )}
                {plan.discount > 0 && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-destructive text-destructive-foreground font-bold text-sm px-3 py-1 shadow-lg">-{plan.discount}%</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4 pt-6">
                  <div className="relative flex items-center justify-center mb-5">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-500" />
                    <Icon name="Star" className="relative w-20 h-20 text-primary fill-primary drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardTitle className="text-4xl font-extrabold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">{plan.stars.toLocaleString()} звёзд</CardTitle>
                  <CardDescription className="text-3xl font-bold bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent mt-3">{plan.price.toLocaleString()} ₽</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="pt-2">
                  <Button className="w-full bg-gradient-to-r from-primary via-yellow-400 to-primary text-primary-foreground hover:shadow-xl hover:shadow-primary/50 font-bold py-6 text-base transition-all duration-300 group-hover:scale-105">
                    <Icon name="ShoppingCart" className="w-5 h-5 mr-2" />
                    Купить сейчас
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <Badge className="bg-accent/20 text-accent border border-accent/50 px-4 py-1.5 text-sm font-semibold">ОТЗЫВЫ</Badge>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-5">
              <span className="bg-gradient-to-r from-accent via-purple-400 to-accent bg-clip-text text-transparent">Отзывы клиентов</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 font-light">Более 10,000 довольных покупателей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={review.id} className="group bg-gradient-to-br from-card to-card hover:from-card hover:to-accent/5 border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-lg font-bold">{review.name}</CardTitle>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="w-4 h-4 text-primary fill-primary drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs text-muted-foreground/70">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <Badge className="bg-primary/20 text-primary border border-primary/50 px-4 py-1.5 text-sm font-semibold">FAQ</Badge>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-5">
              <span className="bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">Частые вопросы</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 font-light">Ответы на популярные вопросы</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-gradient-to-r from-card to-card hover:from-card hover:to-primary/5 border border-border hover:border-primary/50 rounded-xl px-6 py-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <AccordionTrigger className="text-left font-bold text-base hover:text-primary transition-colors py-5">
                  <div className="flex items-center gap-3">
                    <Icon name="HelpCircle" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base leading-relaxed pt-2 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="relative bg-gradient-to-br from-card via-primary/5 to-accent/5 rounded-3xl p-14 border-2 border-primary/30 shadow-2xl shadow-primary/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <Icon name="MessageCircle" className="relative w-20 h-20 text-primary mx-auto drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]" />
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-primary via-yellow-300 to-primary bg-clip-text text-transparent">Остались вопросы?</span>
              </h2>
              <p className="text-xl md:text-2xl text-foreground/80 mb-10 font-light">
                Наша техподдержка работает 24/7 и всегда готова помочь!
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary via-yellow-400 to-primary text-primary-foreground hover:shadow-2xl hover:shadow-primary/50 font-bold py-7 px-8 text-lg transition-all duration-300 hover:scale-105">
                  <Icon name="Send" className="w-6 h-6 mr-2" />
                  Написать в Telegram
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary/50 hover:bg-primary/10 hover:border-primary font-bold py-7 px-8 text-lg transition-all duration-300 hover:scale-105">
                  <Icon name="Mail" className="w-6 h-6 mr-2" />
                  Отправить email
                </Button>
              </div>
              <div className="mt-10 pt-8 border-t border-primary/20">
                <p className="text-sm text-foreground/60 font-medium">
                  Email: <span className="text-primary">support@telestars.ru</span> | Telegram: <span className="text-primary">@telestars_support</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 px-4 border-t border-primary/20 bg-gradient-to-t from-muted/20 to-background">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Star" className="w-6 h-6 text-primary fill-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">TeleStars</span>
          </div>
          <p className="text-sm text-foreground/60">© 2024 TeleStars. Все права защищены.</p>
          <p className="text-xs text-foreground/40 mt-2">Мы не связаны с Telegram официально.</p>
        </div>
      </footer>
    </div>
  );
}