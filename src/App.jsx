import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { 
  Menu, 
  X, 
  GraduationCap, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  CheckCircle,
  Globe,
  BookOpen,
  UserCheck,
  Send
} from 'lucide-react'
import './App.css'

// Import images
import logoImage from './assets/head_abroad_Logo.jpg'
import heroImage from './assets/hero-image.jpg'
import ukUniversitiesImage from './assets/uk-universities.jpg'
import germanyUniversitiesImage from './assets/germany-universities.jpg'
import consultationImage from './assets/consultation.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    country: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      country: ''
    })
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Head Abroad Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-gray-900">Head Abroad</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('countries')} className="text-gray-700 hover:text-blue-600 transition-colors">Countries</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</button>
                <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</button>
                <button onClick={() => scrollToSection('countries')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Countries</button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Head Abroad
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Free initial consultation and professional support to Indian students applying to UK & Germany
          </p>
          <div className="space-x-4">
            <Button 
              onClick={() => scrollToSection('services')} 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg animate-fade-in-delay-2"
            >
              Our Services
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg animate-fade-in-delay-2"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Head Abroad</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide free initial consultation and comprehensive professional support to Indian students pursuing their dreams of studying in the UK and Germany.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our experienced consultants provide personalized guidance throughout your study abroad journey.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Free Initial Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide free initial consultation to understand your study abroad goals and guide you on the best path forward.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  High success rate in university admissions and visa approvals for UK and Germany.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for your study abroad journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>University Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Help you choose the right university and course based on your academic background and career goals.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <UserCheck className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Application Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete support with university applications, documentation, and submission processes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Visa Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert assistance with visa applications, documentation, and interview preparation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>One-on-One Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Personalized consultation sessions with our experienced education consultants.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Send className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Pre-Departure Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Guidance on accommodation, travel arrangements, and settling in your new country.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Scholarship Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Help you find and apply for scholarships and financial aid opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section id="countries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Study Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in helping students get admitted to top universities in the UK and Germany
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <img 
                src={ukUniversitiesImage} 
                alt="UK Universities" 
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">United Kingdom</h3>
              <p className="text-gray-600 mb-6">
                Home to world-renowned universities like Oxford, Cambridge, and Imperial College London. 
                The UK offers excellent education quality and diverse cultural experiences.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />World-class universities</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />English-taught programs</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Rich cultural heritage</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Post-study work opportunities</li>
              </ul>
            </div>

            <div className="text-center">
              <img 
                src={germanyUniversitiesImage} 
                alt="Germany Universities" 
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Germany</h3>
              <p className="text-gray-600 mb-6">
                Known for its strong engineering and technical programs, Germany offers high-quality education 
                with low or no tuition fees at public universities.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Low/No tuition fees</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Strong in engineering & tech</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Excellent job prospects</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Central European location</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your study abroad journey? Get in touch with us today!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">Preferred Country</Label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Select a country</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Germany">Germany</option>
                      <option value="Both">Both UK & Germany</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your study abroad goals..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>headabroad@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>Delhi, India</span>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1642678901234!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoImage} alt="Head Abroad Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold">Head Abroad</span>
              </div>
              <p className="text-gray-400">
                Free initial consultation and professional support to Indian students for studying in UK & Germany.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>University Selection</li>
                <li>Application Assistance</li>
                <li>Visa Guidance</li>
                <li>One-on-One Consultation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
                <div className="flex">
                  <Input 
                    placeholder="Your email" 
                    className="rounded-r-none bg-gray-800 border-gray-700 text-white"
                  />
                  <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Head Abroad. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

