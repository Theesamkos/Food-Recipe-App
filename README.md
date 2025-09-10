# 🍽️ Food Recipe Website

A modern, responsive web application for discovering delicious recipes by searching for ingredients. Built with vanilla HTML, CSS, and JavaScript, this app fetches recipe data from TheMealDB API and displays it in an elegant, user-friendly interface.

![Food Recipe Website](https://img.shields.io/badge/Status-Complete-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **🔍 Ingredient Search**: Search for recipes by entering any ingredient
- **⚡ Real-time Results**: Instant recipe suggestions as you type
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🖼️ Equal Square Images**: Beautiful, consistent image grid layout
- **📋 Detailed Recipes**: Click any recipe to view full instructions and ingredients
- **🎥 Video Links**: Direct links to cooking videos on YouTube
- **⌨️ Keyboard Support**: Press Enter to search
- **🐔 Auto-load Content**: Displays chicken recipes on page load

## 🚀 Live Demo

Simply open `index.html` in your web browser to start using the app!

## 📁 Project Structure

```
food-recipe-website/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # JavaScript functionality and API calls
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript ES6+**: Async/await, DOM manipulation, and API integration
- **TheMealDB API**: Free recipe database API
- **Google Fonts**: Poppins font family for modern typography

## 🎨 Design Features

### Visual Elements
- Clean, modern card-based layout
- Smooth hover animations and transitions
- Professional color scheme with orange accents (#ff5722)
- Beautiful shadows and rounded corners
- Modal popup for detailed recipe view

### Responsive Breakpoints
- **Desktop (1200px+)**: 4 cards per row
- **Tablet (768px-1199px)**: 3 cards per row
- **Mobile (480px-767px)**: 2 cards per row
- **Small Mobile (<480px)**: 1 card per row

## 🔧 How It Works

1. **Search Functionality**: Enter an ingredient in the search box
2. **API Integration**: Fetches data from TheMealDB API
3. **Dynamic Display**: Creates recipe cards with images and titles
4. **Modal Details**: Click any recipe to view full details in a popup
5. **Error Handling**: Gracefully handles API errors and empty results

## 🌐 API Reference

This project uses [TheMealDB API](https://www.themealdb.com/api.php):

- **Search by Ingredient**: `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}`
- **Get Recipe Details**: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={meal_id}`

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls and Google Fonts)

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start searching for recipes!

```bash
# Clone the repository
git clone https://github.com/yourusername/food-recipe-website.git

# Navigate to the project directory
cd food-recipe-website

# Open in browser
# Simply double-click index.html or use a local server
```

## 📱 Usage Examples

### Search Options
Try searching for these popular ingredients:
- `chicken` - Chicken-based recipes
- `beef` - Beef dishes
- `pasta` - Pasta recipes
- `rice` - Rice-based meals
- `tomato` - Tomato recipes
- `cheese` - Cheese-based dishes

### Keyboard Shortcuts
- **Enter**: Perform search
- **Escape**: Close recipe modal (when implemented)

## 🎯 Key JavaScript Functions

### Core Functions
- `getMealsByIngredient(ingredient)` - Fetches recipes by ingredient
- `getMealDetails(mealID)` - Gets detailed recipe information
- `displayMeals(meals)` - Renders recipe cards in the grid
- `showMealDetailsPopup(meal)` - Displays recipe details in modal

### Event Listeners
- Search button click
- Enter key press
- Recipe card click
- Modal close button

## 🎨 CSS Highlights

### Modern Design Patterns
- **Flexbox Layout**: Responsive grid system
- **CSS Custom Properties**: Consistent color scheme
- **Smooth Animations**: Hover effects and transitions
- **Mobile-First Design**: Progressive enhancement
- **Object-fit Cover**: Perfect square images

### Key Selectors
- `.meal-item` - Recipe card styling
- `.meal-img img` - Square image formatting
- `.modal-container` - Popup overlay
- `.recipe-btn` - Call-to-action buttons

## 🔮 Future Enhancements

- [ ] **Advanced Filters**: Filter by cuisine type, cooking time, difficulty
- [ ] **Favorites System**: Save favorite recipes locally
- [ ] **Shopping List**: Generate ingredient lists
- [ ] **Nutritional Info**: Display calorie and nutrition data
- [ ] **Recipe Sharing**: Share recipes via social media
- [ ] **Dark Mode**: Toggle between light and dark themes
- [ ] **Offline Support**: Cache recipes for offline viewing

## 🐛 Known Issues

- Some recipes may not have video links
- API rate limiting may occur with excessive requests
- Images load from external sources (TheMealDB)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **TheMealDB**: For providing the free recipe API
- **Google Fonts**: For the beautiful Poppins font family
- **Unsplash/TheMealDB**: For high-quality food images

## 📞 Support

If you have any questions or issues:
- Create an issue in this repository
- Check the browser console for error messages
- Ensure you have a stable internet connection

---

**Made by Sam Orth**

*Enjoy cooking and discovering new recipes!* 🍳👨‍🍳👩‍🍳
