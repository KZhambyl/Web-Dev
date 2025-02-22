import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productItems: ProductItem[] = [
    {
      id: 0,
      name: 'Боксерские перчатки Sport 22092005-1108 10 oz черный',
      image: 'assets/product0.jpg',
      description: 'Эти боксерские перчатки идеально подходят для тренировок и соревнований. Обеспечивают отличную защиту и комфорт при занятиях боксом благодаря высококачественным материалам и продуманному дизайну.',
      likes: 473,
      link: 'https://kaspi.kz/shop/p/sport-22092005-1108-10-oz-chernyi-110665463/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 0,
      liked: false,
    },
    {
      id: 1,
      name: 'Мяч Тенисный мяч gf00214 3 шт',
      image: 'assets/product1.jpg',
      description: 'Надежные теннисные мячики для тренировок и матчей. Сделаны из прочного материала, который обеспечивает длительное использование и отличную скорость отскока.',
      likes: 516,
      link: 'https://kaspi.kz/shop/p/tenisnyi-mjach-gf00214-3-sht-106320557/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 0,
      liked: false,
    },
    {
      id: 2,
      name: 'Шлем 30057071_424598 черный XL',
      image: 'assets/product2.jpg',
      description: 'Защитный шлем, идеально подходящий для тренировок и соревнований. Прочный и удобный, он обеспечит надежную защиту головы во время активных занятий спортом.',
      likes: 428,
      link: 'https://kaspi.kz/shop/p/30057071-424598-chernyi-xl-114349491/?c=750000000',
      categoryId: 0,
      liked: false,
    },
    {
      id: 3,
      name: 'Степпер Sport Elite BK0703-01',
      image: 'assets/product3.jpg',
      description: 'Компактный и удобный степпер для домашних тренировок. Подходит для кардионагрузок, помогает развивать выносливость и тонизировать мышцы ног.',
      likes: 333,
      link: 'https://kaspi.kz/shop/p/sport-elite-bk0703-01-101959111/?c=750000000',
      categoryId: 0,
      liked: false,
    },
    {
      id: 4,
      name: 'Турник Sport&Fitness SFBRT001 черный',
      image: 'assets/product4.jpg',
      description: 'Прочный и надежный турник для тренировок дома. Позволяет развивать мышцы спины и рук, улучшая общую физическую форму.',
      likes: 43,
      link: 'https://kaspi.kz/shop/p/sport-fitness-sfbrt001-chernyi-132499846/?c=750000000',
      categoryId: 0,
      liked: false,
    },
    {
      id: 5,
      name: 'Толстовка Urban Outfit черный',
      image: 'assets/product5.jpg',
      description: 'Представляем Вам стильную и комфортную женскую / мужскую объемную кофту Унисекс оверсайз с застежкой с капюшоном, которая станет любимой вещью для паркер и девушек.',
      likes: 75,
      link: 'https://kaspi.kz/shop/p/tolstovka-urban-outfit-as534zh-chernyi-l-108392097/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 1,
      liked: false,
    },
    {
      id: 6,
      name: 'Спортивные брюки Urban Outfit черный',
      image: 'assets/product6.jpg',
      description: 'Удобные и стильные спортивные брюки для занятий спортом или повседневного использования. Изготовлены из мягкого и дышащего материала, обеспечивают комфорт на протяжении всего дня.',
      likes: 49,
      link: 'https://kaspi.kz/shop/p/sportivnye-brjuki-urban-outfit-as0539ub-chernyi-l-108460592/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 1,
      liked: false,
    },
    {
      id: 7,
      name: 'Термоноски Alaska Alaska 1 пара черный, серый универсальный',
      image: 'assets/product7.jpg',
      description: 'Мягкие, теплые термоноски унисекс с дышащими свойствами ткани идеальные для повседневного использования в холодное время года.',
      likes: 323,
      link: 'https://kaspi.kz/shop/p/termonoski-alaska-alaska-1-para-chernyi-seryi-universal-nyi-114116462/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 1,
      liked: false,
    },
    {
      id: 8,
      name: 'Майка Berrak Tekstil белый',
      image: 'assets/product8.jpg',
      description: 'Эта майка из легкого и дышащего материала, идеально подходит для летних дней и активных занятий спортом. Она обеспечит комфорт и свободу движений.',
      likes: 466,
      link: 'https://kaspi.kz/shop/p/maika-berrak-tekstil-1020-new-3404-belyi-xs-116308174/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 1,
      liked: false,
    },
    {
      id: 9,
      name: 'Повседневный костюм черный',
      image: 'assets/product9.jpg',
      description: 'Стильный и удобный повседневный костюм для активных людей. Он состоит из удобного топа и брюк, которые подходят для различных ситуаций.',
      likes: 541,
      link: 'https://kaspi.kz/shop/p/povsednevnyi-kostjum-769965-chernyi-xl-119900668/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 1,
      liked: false,
    },
    {
      id: 10,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      image: 'assets/product10.jpg',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
      likes: 347,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 2,
      liked: false,
    },
    {
      id: 11,
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      image: 'assets/product11.jpg',
      description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности.',
      likes: 111,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 2,
      liked: false,
    },
    {
      id: 12,
      name: 'Стиральная машина LG F2J3NS0W белый',
      image: 'assets/product12.jpg',
      description: 'Глубина стиральной машины LG F2J3NS0W всего 44 см, благодаря чему она поместится даже в небольшую ванную комнату. Барабан вмещает 6 кг сухого белья, чего вполне достаточно для семьи из трёх-четырёх человек.',
      likes: 517,
      link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 2,
      liked: false,
    },
    {
      id: 13,
      name: 'Микроволновая печь Hansa AMMF19M1SH серебристый',
      image: 'assets/product13.jpg',
      description: 'Микроволновая печь Hansa AMMF19M1SH серебристого цвета с мощностью 800 Вт обеспечит быстрый и равномерный нагрев пищи.',
      likes: 152,
      link: 'https://kaspi.kz/shop/p/hansa-ammf19m1sh-serebristyi-123644190/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 2,
      liked: false,
    },
    {
      id: 14,
      name: 'Увлажнитель воздуха Maxmoll H2O A5 белый',
      image: 'assets/product14.jpg',
      description: 'Увлажнитель воздуха Maxmoll H2O A5 в белом цвете эффективно увлажняет воздух в помещении, создавая комфортный микроклимат для здоровья.',
      likes: 427,
      link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-maxmoll-h2o-a5-belyi-109792185/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 2,
      liked: false,
    },
    {
      id: 15,
      name: 'Книга Кавамура Гэнки: Если все кошки в мире исчезнут',
      image: 'assets/product15.jpg',
      description: 'Международный феномен, проданный тиражом более двух миллионов экземпляров! Это согревающая, забавная и глубокая книга о смысле жизни.',
      likes: 641,
      link: 'https://kaspi.kz/shop/p/kavamura-genki-esli-vse-koshki-v-mire-ischeznut-110275073/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 3,
      liked: false,
    },
    {
      id: 16,
      name: 'Книга Без автора: Қаныш және ғылыми майдан',
      image: 'assets/product16.jpg',
      description: 'Книга рассказывает о жизни и научной деятельности выдающегося казахстанского ученогоъ. В произведении раскрываются его достижения в области науки и его вклад в развитие научной мысли в Казахстане и в мире.',
      likes: 68,
      link: 'https://kaspi.kz/shop/p/bez-avtora-anysh-zh-ne-ylymi-maidan-129286905/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 3,
      liked: false,
    },
    {
      id: 17,
      name: 'Книга Кристи А.: Убийства по алфавиту',
      image: 'assets/product17.jpg',
      description: 'В английском алфавите 26 букв. В подписи преступника, затеявшего с Эркюлем Пуаро игру при помощи писем, всего три буквы - первые, А, B и С.',
      likes: 241,
      link: 'https://kaspi.kz/shop/p/kristi-a-ubiistva-po-alfavitu-101516844/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 3,
      liked: false,
    },
    {
      id: 18,
      name: 'Книга Аврелий М.: Наедине с собой',
      image: 'assets/product18.jpg',
      description: '"Наедине с собой. Размышления" - сборник афористических мыслей Марка Аврелия, написанный им на греческом языке (койне) в 70-е годы II века во время войны на дунайской границе. Он пользовался несомненным успехом в позднеантичное время, а в XVI веке возродился в европейских философских кругах.',
      likes: 654,
      link: 'https://kaspi.kz/shop/p/avrelii-m-naedine-s-soboi-101133476/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 3,
      liked: false,
    },
    {
      id: 19,
      name: 'Книга Клейсон Дж.: Самый богатый человек в Вавилоне',
      image: 'assets/product19.jpg',
      description: 'Джордж Сэмюэль Клейсон родился в штате Луизиана в далёком 1874 году. Окончив университет, он отправился сражаться на испано-американскую войну, откуда ему повезло вернуться целым и невредимым.',
      likes: 115,
      link: 'https://kaspi.kz/shop/p/kleison-dzh-samyi-bogatyi-chelovek-v-vavilone-110124436/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiAtsa9BhAKEiwAUZAszaOeA2K238Jwj-TXLMfEO4tBSQbz1nYFzzXiB8J0mwg-_jXKbNJXxRoCAaAQAvD_BwE',
      categoryId: 3,
      liked: false,
    }
  ];

  constructor() { }

  getProductItems(): ProductItem[] {
    return this.productItems;
  }

  deleteProduct(id: number): void {
    this.productItems = this.productItems.filter(item => item.id !== id);
  }

  updateLikes(id: number, liked: boolean): void {
    const product = this.productItems.find(item => item.id === id);
    if (product) {
      product.likes += liked ? 1 : -1;
      product.liked = liked;
    }
  }
}
