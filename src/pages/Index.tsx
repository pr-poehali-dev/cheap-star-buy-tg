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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Icon name="Zap" className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Лучшие цены на Telegram Stars</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-gradient gold-glow">
            Покупай звёзды<br />дёшево и быстро
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Самые выгодные цены на рынке • Мгновенная доставка • Гарантия возврата • Поддержка 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" onClick={() => scrollToSection('catalog')} className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 animate-glow">
              <Icon name="ShoppingCart" className="w-5 h-5 mr-2" />
              Купить звёзды
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('faq')} className="text-lg px-8 py-6">
              <Icon name="HelpCircle" className="w-5 h-5 mr-2" />
              Узнать больше
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6 text-center">
                <Icon name="Zap" className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Моментально</h3>
                <p className="text-muted-foreground">Доставка за 30 секунд после оплаты</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6 text-center">
                <Icon name="Shield" className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Безопасно</h3>
                <p className="text-muted-foreground">Защита аккаунта и личных данных</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6 text-center">
                <Icon name="Headphones" className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">Поддержка 24/7</h3>
                <p className="text-muted-foreground">Всегда готовы помочь в любое время</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Выгодные тарифы</h2>
            <p className="text-xl text-muted-foreground">Чем больше покупаешь — тем больше экономишь</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-primary border-2 card-glow' : 'hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                  </div>
                )}
                {plan.discount > 0 && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">-{plan.discount}%</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <Icon name="Star" className="w-16 h-16 text-primary fill-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold">{plan.stars} звёзд</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary mt-2">{plan.price} ₽</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    Купить сейчас
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Более 10,000 довольных покупателей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="w-4 h-4 text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20">
            <Icon name="MessageCircle" className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 text-gradient">Остались вопросы?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Наша техподдержка работает 24/7 и всегда готова помочь!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Send" className="w-5 h-5 mr-2" />
                Написать в Telegram
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Mail" className="w-5 h-5 mr-2" />
                Отправить email
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Email: support@telestars.ru | Telegram: @telestars_support
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 TeleStars. Все права защищены. Мы не связаны с Telegram официально.</p>
        </div>
      </footer>
    </div>
  );
}
