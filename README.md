# 📚 BookHaven - Modern Bookstore Application

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) bookstore application with modern UI/UX, shopping cart functionality, and comprehensive book management features.

## 🌟 Features

### 🛍️ **E-commerce Features**
- **Shopping Cart**: Add/remove books, quantity management, persistent cart
- **Search Functionality**: Real-time search across book titles, authors, and tags
- **Book Categories**: Fiction, Non-Fiction, Self-Help, Philosophy, Computer Science
- **Book Details**: Comprehensive book information with ratings, reviews, and descriptions
- **Checkout System**: Complete order processing with success notifications

### 🎨 **User Interface**
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, loading states, and toast notifications

### 📚 **Book Management**
- **Rich Book Data**: 19+ books across multiple categories
- **Book Covers**: High-quality images with fallback handling
- **Book Information**: Author, price, ratings, reviews, stock status
- **Categories & Tags**: Organized book classification system

### 🔧 **Technical Features**
- **Authentication**: User login/signup with JWT tokens
- **State Management**: React Context API for cart and authentication
- **API Integration**: RESTful API with MongoDB backend
- **Error Handling**: Comprehensive error handling and loading states
- **Image Optimization**: Multiple fallback levels for book covers

## 🚀 Tech Stack

### **Frontend**
- **React.js 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Toast notifications
- **React Slick** - Carousel components

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **CORS** - Cross-origin resource sharing

### **Development Tools**
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **Git** - Version control

## 📁 Project Structure

```
bookStoreApp-master/
├── Backend/
│   ├── controller/
│   │   ├── book.controller.js    # Book CRUD operations
│   │   └── user.controller.js    # User authentication
│   ├── model/
│   │   ├── book.model.js        # Book schema
│   │   └── user.model.js        # User schema
│   ├── route/
│   │   ├── book.route.js        # Book API routes
│   │   └── user.route.js        # User API routes
│   ├── index.js                 # Server entry point
│   ├── seedData.js             # Database seeding script
│   └── package.json            # Backend dependencies
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Banner.jsx       # Hero section
│   │   │   ├── Cards.jsx        # Book cards
│   │   │   ├── CartDisplay.jsx  # Shopping cart
│   │   │   ├── Course.jsx       # Books page
│   │   │   ├── Footer.jsx       # Footer component
│   │   │   ├── Freebook.jsx     # Featured books
│   │   │   ├── Login.jsx        # Login modal
│   │   │   ├── Logout.jsx       # Logout component
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   └── Signup.jsx       # Signup modal
│   │   ├── context/
│   │   │   ├── AuthProvider.jsx # Authentication context
│   │   │   └── CartProvider.jsx # Shopping cart context
│   │   ├── pages/
│   │   │   ├── About.jsx        # About page
│   │   │   ├── Contact.jsx     # Contact page
│   │   │   └── Cart.jsx        # Cart page
│   │   ├── home/
│   │   │   └── Home.jsx         # Homepage
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # App entry point
│   │   └── index.css            # Global styles
│   └── package.json             # Frontend dependencies
└── README.md                    # Project documentation
```

## 🛠️ Installation & Setup

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd bookStoreApp-master
```

### **2. Backend Setup**
```bash
cd Backend
npm install
```

**Environment Variables**
Create a `.env` file in the Backend directory:
```env
MongoDBURI=mongodb://localhost:27017/bookhaven
JWT_SECRET=your_jwt_secret_key
PORT=4001
```

**Start Backend Server**
```bash
npm start
# or
node index.js
```

### **3. Frontend Setup**
```bash
cd Frontend
npm install
```

**Start Frontend Development Server**
```bash
npm run dev
```

### **4. Database Seeding**
```bash
cd Backend
node seedData.js
```

## 🎯 API Endpoints

### **Books**
- `GET /book` - Get all books (with optional search, category filters)
- `GET /book/:id` - Get book by ID
- `POST /book` - Create new book
- `PUT /book/:id` - Update book
- `DELETE /book/:id` - Delete book
- `GET /book/categories` - Get all categories

### **Users**
- `POST /user/signup` - User registration
- `POST /user/login` - User login

## 🎨 Key Components

### **Authentication System**
- JWT-based authentication
- Protected routes
- User session management
- Login/Signup modals

### **Shopping Cart**
- Add/remove items
- Quantity management
- Persistent cart (localStorage)
- Cart total calculation
- Checkout process

### **Book Management**
- Book listing with pagination
- Search functionality
- Category filtering
- Book details display
- Image handling with fallbacks

### **UI Components**
- Responsive navigation
- Dark/light theme toggle
- Loading states
- Error handling
- Toast notifications

## 📱 Pages & Routes

- **`/`** - Homepage with featured books and banner
- **`/course`** - Books catalog with search and filtering
- **`/cart`** - Shopping cart page
- **`/about`** - About page with company information
- **`/contact`** - Contact page with form and social media
- **`/signup`** - User registration

## 🎨 Styling & Theming

### **Tailwind CSS Classes**
- Responsive design with mobile-first approach
- Dark mode support with `dark:` prefix
- Custom color scheme with indigo primary color
- Smooth transitions and hover effects

### **Component Styling**
- Card-based layout for books
- Gradient backgrounds
- Shadow effects for depth
- Rounded corners and modern spacing

## 🔧 Development Features

### **State Management**
- React Context API for global state
- Local state with useState hook
- Persistent cart with localStorage
- Theme persistence

### **Error Handling**
- Try-catch blocks for API calls
- Loading states for better UX
- Error boundaries for component errors
- Toast notifications for user feedback

### **Performance Optimizations**
- Image lazy loading
- Component memoization
- Efficient re-renders
- Optimized bundle size

## 📊 Database Schema

### **Book Model**
```javascript
{
  title: String (required),
  author: String (required),
  price: Number (required),
  originalPrice: Number,
  category: String (required),
  subcategory: String,
  image: String (required),
  images: [String],
  description: String (required),
  longDescription: String,
  publishedYear: Number (required),
  isbn: String,
  pages: Number,
  language: String,
  publisher: String,
  stock: Number,
  isAvailable: Boolean,
  isFeatured: Boolean,
  isBestSeller: Boolean,
  rating: Number,
  reviewCount: Number,
  tags: [String],
  dimensions: Object,
  weight: Number,
  format: String,
  ageGroup: String,
  createdAt: Date,
  updatedAt: Date
}
```

### **User Model**
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required),
  createdAt: Date
}
```

## 🚀 Deployment

### **Frontend Deployment (Vercel/Netlify)**
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables for API URL

### **Backend Deployment (Heroku/Railway)**
1. Set environment variables
2. Connect to MongoDB Atlas
3. Deploy with process manager

### **Database (MongoDB Atlas)**
1. Create MongoDB Atlas cluster
2. Get connection string
3. Update environment variables

## 🧪 Testing

### **Manual Testing Checklist**
- [ ] User registration and login
- [ ] Book search functionality
- [ ] Add to cart functionality
- [ ] Cart management (add/remove/update)
- [ ] Checkout process
- [ ] Theme switching
- [ ] Responsive design
- [ ] Image loading and fallbacks

## 🐛 Known Issues & Solutions

### **Image Loading**
- **Issue**: Some book images may not load
- **Solution**: Multiple fallback levels implemented
- **Fallback Order**: Primary image → ISBN-based image → Placeholder

### **Theme Switching**
- **Issue**: Theme not persisting across pages
- **Solution**: localStorage implementation with useEffect

### **Cart Persistence**
- **Issue**: Cart items lost on page refresh
- **Solution**: localStorage with JSON serialization

## 🔮 Future Enhancements

### **Planned Features**
- [ ] User profiles and order history
- [ ] Book reviews and ratings system
- [ ] Wishlist functionality
- [ ] Advanced filtering and sorting
- [ ] Payment integration (Stripe/PayPal)
- [ ] Admin dashboard for book management
- [ ] Email notifications
- [ ] Book recommendations
- [ ] Multi-language support
- [ ] Mobile app (React Native)

### **Technical Improvements**
- [ ] Unit and integration tests
- [ ] API documentation (Swagger)
- [ ] Performance monitoring
- [ ] SEO optimization
- [ ] PWA features
- [ ] GraphQL implementation
- [ ] Microservices architecture

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **Frontend Development**: React.js, Tailwind CSS, Context API
- **Backend Development**: Node.js, Express.js, MongoDB
- **UI/UX Design**: Modern, responsive design with dark mode
- **Database Design**: MongoDB with Mongoose ODM

## 📞 Support

For support and questions:
- Email: support@bookhaven.com
- GitHub Issues: [Create an issue](https://github.com/your-repo/issues)
- Documentation: [Project Wiki](https://github.com/your-repo/wiki)

## 🙏 Acknowledgments

- **React.js** - Frontend framework
- **Tailwind CSS** - Styling framework
- **MongoDB** - Database
- **Express.js** - Backend framework
- **Open Library** - Book cover images
- **Amazon** - Book cover fallbacks

---

**BookHaven** - Your digital bookstore for the modern reader 📚✨
