
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Check, Users, DollarSign } from "lucide-react";

const Instructions = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Wave SVG - properly positioned and sized */}
        <div className="relative w-full h-16 md:h-24 overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="absolute top-0 left-0 w-full h-full"
            style={{ transform: 'translateY(-1px)' }}
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="#12e8f0"
            />
          </svg>
        </div>

        <div className="app-container px-4 sm:px-6 mt-8 md:mt-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Инструкции</h1>
          
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Instruction 1 - Easy Organization */}
            <div className="w-full">
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-warmyellow-400 to-warmyellow-300 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white flex items-center">
                      <span className="bg-white text-warmyellow-500 w-10 h-10 flex items-center justify-center rounded-full mr-4 flex-shrink-0">1</span>
                      Лесна организация на футболни срещи
                    </h2>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <p className="text-gray-700 text-lg">
                          SureGo улеснява организирането на футболни мачове с приятели:
                        </p>
                        
                        <div>
                          <h3 className="font-bold text-xl mb-4 text-warmyellow-500">Мениджърът на отбора:</h3>
                          <ul className="ml-5 space-y-3">
                            <li className="flex items-start">
                              <Check className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                              <span className="text-lg">Създава събитие с дата и час.</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                              <span className="text-lg">Определя играчите (основни, резерви, гости).</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                              <span className="text-lg">Автоматично изпраща покани.</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-xl mb-4 text-warmyellow-500">SureGo автоматично:</h3>
                          <ul className="ml-5 space-y-3">
                            <li className="flex items-start">
                              <Check className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                              <span className="text-lg">Изпраща покани.</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                              <span className="text-lg">Проследява потвърждения в реално време.</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                              <span className="text-lg">Предоставя контрол и гъвкавост на мениджъра.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img 
                          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop" 
                          alt="Създаване на събитие" 
                          className="w-full rounded-lg shadow-md"
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
                          alt="Управление на играчи" 
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instruction 2 - Account Creation */}
            <div className="w-full">
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-warmyellow-400 to-warmyellow-300 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white flex items-center">
                      <span className="bg-white text-warmyellow-500 w-10 h-10 flex items-center justify-center rounded-full mr-4 flex-shrink-0">2</span>
                      Създаване на профил – бързо и удобно!
                    </h2>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <p className="text-gray-700 text-lg">
                          Регистрацията е лесна и ви дава незабавен достъп:
                        </p>
                        
                        <div>
                          <h3 className="font-bold text-xl mb-4 text-warmyellow-500">Изтеглете приложението:</h3>
                          <div className="flex flex-wrap gap-4 ml-5 mt-3">
                            <a href="https://apps.apple.com/bg/app/surego/id1671429121" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center w-auto">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-14 w-auto" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.intellicsengineering.surego2" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center w-auto">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-14 w-auto" />
                            </a>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-xl mb-4 text-warmyellow-500">Изберете метод за регистрация:</h3>
                          <ul className="ml-5 space-y-3">
                            <li className="flex items-start">
                              <Check className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                              <span className="text-lg">Google акаунт (бързо и удобно)</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                              <span className="text-lg">Apple ID (за потребители на iOS)</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                              <span className="text-lg">Имейл (необходимо потвърждение)</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img 
                          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                          alt="Изтегляне на приложението" 
                          className="w-full rounded-lg shadow-md"
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop" 
                          alt="Регистрация в приложението" 
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instruction 3 - Team Creation */}
            <div className="w-full">
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-warmyellow-400 to-warmyellow-300 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white flex items-center">
                      <span className="bg-white text-warmyellow-500 w-10 h-10 flex items-center justify-center rounded-full mr-4 flex-shrink-0">3</span>
                      Създаване на вашия отбор
                    </h2>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <p className="text-gray-700 text-lg">
                          Създайте отбор в няколко лесни стъпки:
                        </p>
                        
                        <ul className="ml-0 space-y-4">
                          <li className="flex items-center">
                            <div className="flex items-center justify-center rounded-full bg-gray-100 w-8 h-8 text-warmyellow-500 font-semibold mr-4 flex-shrink-0">1</div>
                            <span className="text-lg">Отворете „Отбори".</span>
                          </li>
                          <li className="flex items-center">
                            <div className="flex items-center justify-center rounded-full bg-gray-100 w-8 h-8 text-warmyellow-500 font-semibold mr-4 flex-shrink-0">2</div>
                            <span className="text-lg">Натиснете „+" (горен десен ъгъл).</span>
                          </li>
                          <li className="flex items-center">
                            <div className="flex items-center justify-center rounded-full bg-gray-100 w-8 h-8 text-warmyellow-500 font-semibold mr-4 flex-shrink-0">3</div>
                            <span className="text-lg">Попълнете име, държава, град и добавете снимка.</span>
                          </li>
                          <li className="flex items-center">
                            <div className="flex items-center justify-center rounded-full bg-gray-100 w-8 h-8 text-warmyellow-500 font-semibold mr-4 flex-shrink-0">4</div>
                            <span className="text-lg">Натиснете „Запази".</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img 
                          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
                          alt="Стъпка 1: Отваряне на отбори" 
                          className="w-full rounded-lg shadow-md"
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop" 
                          alt="Стъпка 2: Натискане на плюс" 
                          className="w-full rounded-lg shadow-md"
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
                          alt="Стъпка 3: Попълване на данни" 
                          className="w-full rounded-lg shadow-md"
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                          alt="Стъпка 4: Запазване на отбора" 
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instruction 4 - Player Management */}
            <div className="w-full">
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-warmyellow-400 to-warmyellow-300 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white flex items-center">
                      <span className="bg-white text-warmyellow-500 w-10 h-10 flex items-center justify-center rounded-full mr-4 flex-shrink-0">4</span>
                      Добавяне и управление на играчи
                    </h2>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <p className="text-gray-700 text-lg">
                          Поддържайте отбора си организиран и готов за игра:
                        </p>
                        
                        <p className="mb-4 font-medium text-lg">Отворете „Отбори" {'->'}  Изберете вашия отбор {'->'}  „Играчи" {'->'}  „+".</p>
                        
                        <div>
                          <h3 className="font-bold text-xl mb-4 text-warmyellow-500">Добавете играчи чрез:</h3>
                          <ul className="ml-5 space-y-3">
                            <li className="flex items-start">
                              <Check className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                              <span className="text-lg">SureGo ID (директно и бързо)</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                              <span className="text-lg">Телефонен номер (лесно свързване)</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                              <span className="text-lg">Контакти от телефона (автоматично и удобно)</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img 
                          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop" 
                          alt="Добавяне чрез SureGo ID" 
                          className="w-full rounded-lg shadow-md"
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
                          alt="Добавяне чрез телефон" 
                          className="w-full rounded-lg shadow-md"
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop" 
                          alt="Добавяне от контакти" 
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instruction 5 - Event Creation */}
            <div className="w-full">
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-warmyellow-400 to-warmyellow-300 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white flex items-center">
                      <span className="bg-white text-warmyellow-500 w-10 h-10 flex items-center justify-center rounded-full mr-4 flex-shrink-0">5</span>
                      Създаване на събитие
                    </h2>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <p className="text-gray-700 text-lg">
                          Бързо и ефективно организирайте футболни събития:
                        </p>
                        
                        <div>
                          <ul className="ml-0 space-y-4">
                            <li className="flex items-center">
                              <div className="flex items-center justify-center rounded-full bg-gray-100 w-8 h-8 text-warmyellow-500 font-semibold mr-4 flex-shrink-0">1</div>
                              <span className="text-lg">Изберете вашия отбор {'->'}  „Събития" {'->'}  „+".</span>
                            </li>
                            <li className="flex items-center">
                              <div className="flex items-center justify-center rounded-full bg-gray-100 w-8 h-8 text-warmyellow-500 font-semibold mr-4 flex-shrink-0">2</div>
                              <span className="text-lg">Попълнете име, описание и локация.</span>
                            </li>
                            <li className="flex items-center">
                              <div className="flex items-center justify-center rounded-full bg-gray-100 w-8 h-8 text-warmyellow-500 font-semibold mr-4 flex-shrink-0">3</div>
                              <span className="text-lg">Задайте дата, час, продължителност и повторяемост.</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-xl mb-4 text-warmyellow-500">Автоматични функции:</h3>
                          <div className="bg-warmyellow-50 p-6 rounded-md">
                            <ul className="ml-2 space-y-3">
                              <li className="flex items-start">
                                <Calendar className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                                <span className="text-lg">Изпращане на покани.</span>
                              </li>
                              <li className="flex items-start">
                                <Users className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                                <span className="text-lg">Проследяване на потвържденията.</span>
                              </li>
                              <li className="flex items-start">
                                <Check className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                                <span className="text-lg">Балансиране на отборите.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img 
                          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
                          alt="Стъпка 1: Отваряне на събития" 
                          className="w-full rounded-lg shadow-md"
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                          alt="Стъпка 2: Попълване на детайли" 
                          className="w-full rounded-lg shadow-md"
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop" 
                          alt="Стъпка 3: Настройка на дата и час" 
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instruction 6 - Payment Management */}
            <div className="w-full">
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-warmyellow-400 to-warmyellow-300 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white flex items-center">
                      <span className="bg-white text-warmyellow-500 w-10 h-10 flex items-center justify-center rounded-full mr-4 flex-shrink-0">6</span>
                      Управление на плащанията
                    </h2>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <p className="text-gray-700 text-lg">
                          Лесно и прозрачно финансово управление на вашите събития:
                        </p>
                        
                        <div>
                          <ol className="ml-0 space-y-4">
                            <li className="flex items-center">
                              <div className="flex items-center justify-center rounded-full bg-gray-100 w-8 h-8 text-warmyellow-500 font-semibold mr-4 flex-shrink-0">1</div>
                              <span className="text-lg">Изберете събитие и натиснете "$".</span>
                            </li>
                            <li className="flex items-center">
                              <div className="flex items-center justify-center rounded-full bg-gray-100 w-8 h-8 text-warmyellow-500 font-semibold mr-4 flex-shrink-0">2</div>
                              <span className="text-lg">Управлявайте плащанията на играчите.</span>
                            </li>
                            <li className="flex items-center">
                              <div className="flex items-center justify-center rounded-full bg-gray-100 w-8 h-8 text-warmyellow-500 font-semibold mr-4 flex-shrink-0">3</div>
                              <span className="text-lg">Завършете процеса с потвърждение.</span>
                            </li>
                          </ol>
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-xl mb-4 text-warmyellow-500">Ключови предимства:</h3>
                          <div className="bg-warmyellow-50 p-6 rounded-md">
                            <ul className="ml-2 space-y-3">
                              <li className="flex items-start">
                                <DollarSign className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                                <span className="text-lg">Удобно и ясно финансово управление.</span>
                              </li>
                              <li className="flex items-start">
                                <DollarSign className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                                <span className="text-lg">Автоматични изчисления и баланси.</span>
                              </li>
                              <li className="flex items-start">
                                <DollarSign className="text-warmyellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                                <span className="text-lg">Остатъците се съхраняват автоматично.</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img 
                          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
                          alt="Стъпка 1: Избор на събитие" 
                          className="w-full rounded-lg shadow-md"
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop" 
                          alt="Стъпка 2: Управление на плащания" 
                          className="w-full rounded-lg shadow-md"
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
                          alt="Стъпка 3: Потвърждение" 
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </main>
      {/* Added margin before footer */}
      <div className="mt-16 md:mt-24"></div>
      <Footer />
    </div>
  );
};

export default Instructions;
