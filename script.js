// script.js

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        // Здесь можно загрузить данные о товаре по ID из сервера или локального объекта
        // Для простоты используем статические данные
        const products = {
            1: {
                name: 'Fenty Skin Cherry Treat Conditioning + Strengthening Lip Oil Cream',
                description: 'About this item An ultra-hydrating lip oil that goes on clear, cushions lips with decadent fruit oils and vitamin-rich cherry extracts, and leaves lips’ moisture barrier replenished. It conditions, softens, and smooths lips while leaving a subtle sheen for a naturally juicy pout. The clear, non-sticky formula effortlessly glides on lips with the plush doe-foot applicator and features a fruity, cherry-inspired scent for the ultimate treat. Instantly hydrates lips and improves lips’ texture and smoothness Hydrates lips and fortifies the skin barrier all day long',
                price: '$35',
                image: 'images/1.jpeg'
            },
            2: {
                name: 'the peptide lip tints',
                description: 'Our complete lip tint collection of sheer-but-buildable shades that melt onto lips for a rich, glossy finish. Includes: All four fragrance free shades of Peptide Lip Tint in Ribbon, Raspberry Jelly, Toast and Espresso Size: 10ml / .3 fl oz each.',
                price: '$58',
                image: 'images/2.jpg'
            },
            3: {
                name: 'Honey Infused Hydrating Lip Oil',
                description: 'Ingredient Callouts: Free of parabens, formaldehydes, formaldehyde-releasing agents, phthalates, mineral oil, retinyl palmitate, oxybenzone, coal tar, hydroquinone, sulfates SLS & SLES, triclocarban, triclosan, and contains less than one percent synthetic fragrance. It is also cruelty-free. What Else You Need to Know: Formulated with a blend of nourishing Mirsalehi honey, bee garden oils, and hyaluronic acid, this bestselling lip oil delivers long-lasting hydration and high shine to quench chapped lips with juicy a scent and touch of color. Gisou’s non-sticky formula smooths and locks in moisture throughout the day.',
                price: '$28',
                image: 'images/3.jpeg'
            },
            4: {
                name: 'DIOR ADDICT LIP GLOW OIL',
                description: 'Масло для губ обьединяет интенсивно ухаживающую формулу с естественным финишем для ультрасияющего результата. Масло Dior Addict Lip Glow Oil адаптируется ко всем оттенкам губ, придавая им румяное сияние. Его нелипкая нежирная маслянистая текстура меняет представления о блеске, формируя пленку, которая разглаживает губы и создает чарующий эффект зеркального сияния.',
                price: '$40',
                image: 'images/4.jpeg'
            },
            5: {
                name: 'KUSH Sheer Hydrating Lip Oil',
                description: 'A sheer, non-sticky hydrating lip oil made with a moisturizing hemp seed oil blend that delivers an intense hit of hydration and shine for smoother, fuller-looking lips.',
                price: '$26',
                image: 'images/5.jpeg'
            },
            6: {
                name: 'Fenty Beauty by Rihanna',
                description: 'Gloss Bomb Heat has an innovative Plump Job Complex that contains a blend of ingredients designed to gently plump lips for an undeniably fuller pout. The conditioning shea butter and vitamin E help lock in moisture for an intense wet-look shine finish.',
                price: '$20',
                image: 'images/6.jpeg'
            }
        };

        const product = products[productId];
        if (product) {
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-description').textContent = product.description;
            document.getElementById('product-price').textContent = `Цена: ${product.price}`;
            document.getElementById('product-image').src = product.image;
        }
    }

    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function () {
            alert('Товар успешно добавлен в корзину!');
        });
    }
});
