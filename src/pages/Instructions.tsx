
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Instructions = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 pb-16">
        <div className="app-container px-4 sm:px-6 mt-8 md:mt-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Инструкции</h1>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section 1 */}
            <section className="bg-gradient-to-br from-[#E7F6FF] to-white rounded-lg p-6 md:p-8 shadow-md border border-[#D3E4FD]">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#0f87e9]">Да забравим за хаоса с футболните срещи!</h2>
              <p className="mb-4">Организирането на мач с момчетата от квартала всяка седмица е истинско предизвикателство – някой не може, друг се разболява, винаги има проблеми, които трябва да се решават в последния момент, за да се събере необходимия брой играчи.</p>
              <p className="mb-4 font-medium text-[#0f87e9]">SureGo идва с решението!</p>
              <p className="mb-4">Приложението поема голяма част от организационния стрес. Мениджърът на отбора просто създава събитие, избира дата и часа, посочва кои играчи са титуляри, резерви или гости, и задава време за изпращане на поканите. Оттук нататък SureGo автоматично:</p>
              <ul className="list-none space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2 flex-shrink-0">✔</span> 
                  <span>Изпраща покани</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2 flex-shrink-0">✔</span>
                  <span>Следи потвържденията за участие</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2 flex-shrink-0">✔</span>
                  <span>Дава на мениджъра пълен контрол в реално време, за да може да реагира при нужда</span>
                </li>
              </ul>
              <p>Но това не е всичко! Приложението също така опростява управлението на финансите на отбора. Всеки играч може да проверява колко пари има в касата и хазната, така че всичко да е прозрачно и лесно.</p>
              <p className="font-medium mt-4 text-[#0f87e9]">С SureGo футболът става удоволствие – без главоболия!</p>
            </section>
            
            {/* Section 2 */}
            <section className="bg-gradient-to-br from-[#E7F6FF] to-white rounded-lg p-6 md:p-8 shadow-md border border-[#D3E4FD]">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#0f87e9]">Създаване на профил в SureGo – бързо и лесно!</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">Свалете приложението</h3>
                  <p>Достапно е в:</p>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li><a href="#" className="text-blue-600 hover:underline hover:text-[#0f87e9] transition-colors">[App Store]</a> (за iPhone)</li>
                    <li><a href="#" className="text-blue-600 hover:underline hover:text-[#0f87e9] transition-colors">[Google Play]</a> (за Android)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">Изберете начин за регистрация</h3>
                  <p>Можете да се регистрирате чрез:</p>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>Google акаунт</li>
                    <li>Apple ID</li>
                    <li>Имейл (изберете „Създай профил")</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">Ако сте избрали имейл регистрация:</h3>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>Въведете вашия имейл и парола</li>
                    <li>Натиснете „Създай профил"</li>
                    <li>Проверете имейла си за потвърждаващ линк</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">Активирайте профила си</h3>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>Отворете имейла и кликнете върху линка за потвърждение</li>
                    <li>Върнете се в приложението и изберете „Вход с имейл"</li>
                    <li>Въведете имейл и парола – и готово!</li>
                  </ul>
                </div>
                
                <p className="font-medium text-[#0f87e9]">Вече имате активен профил и сте готови да започнете да използвате SureGo!</p>
              </div>
            </section>
            
            {/* Section 3 */}
            <section className="bg-gradient-to-br from-[#E7F6FF] to-white rounded-lg p-6 md:p-8 shadow-md border border-[#D3E4FD]">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#0f87e9]">Създайте своя отбор</h2>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>Отворете раздела „Отбори"</li>
                <li>Натиснете „+" (в горния десен ъгъл)</li>
                <li>Попълнете име, държава, град и добавете снимка</li>
                <li>Натиснете „Запази" – и готово!</li>
              </ul>
              <p className="font-medium mt-4 text-[#0f87e9]">Вече сте готови да организирате мачовете си без главоболия!</p>
            </section>
            
            {/* Section 4 */}
            <section className="bg-gradient-to-br from-[#E7F6FF] to-white rounded-lg p-6 md:p-8 shadow-md border border-[#D3E4FD]">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#0f87e9]">Добавяне и настройка на играчи в отбора</h2>
              <p className="mb-4">Вече имате създаден отбор - нека го организираме перфектно!</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">1. Достъп до секцията за играчи:</h3>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>Отворете раздела „Отбори"</li>
                    <li>Изберете вашия отбор</li>
                    <li>Кликнете върху „Играчи"</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">2. Добавяне на нов играч:</h3>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>Натиснете „+" (в горния десен ъгъл)</li>
                    <li>
                      Изберете удобен за вас метод:
                      <ul className="list-disc ml-6 space-y-1 mt-1">
                        <li>Чрез SureGo ID (намерете го в профила на играча)</li>
                        <li>Чрез телефонен номер (ръчно въвеждане)</li>
                        <li>От контактите на телефона (автоматично свързване)</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">3. Конфигуриране на играча</h3>
                  
                  <div className="ml-6 space-y-4">
                    <div>
                      <p className="font-medium italic text-[#0f87e9]">Задаване на роля:</p>
                      <ul className="list-none space-y-1 mt-1">
                        <li>🏆 Основен (приоритетни покани)</li>
                        <li>🔄 Резервен (поканват се втори)</li>
                        <li>👋 Гост (поканват се при нужда)</li>
                        <li>👀 Наблюдател (само преглед)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-medium italic text-[#0f87e9]">Специалност (позиция):</p>
                      <ul className="list-none space-y-1 mt-1">
                        <li>🧤 Вратар</li>
                        <li>🛡️ Защитник</li>
                        <li>⚙️ Полузащитник</li>
                        <li>⚡ Нападател</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-medium italic text-[#0f87e9]">Позициите се използват за:</p>
                      <ul className="list-disc ml-6 space-y-1 mt-1">
                        <li>Автоматично балансиране на отборите при мачове</li>
                        <li>Детайлна статистика по пост</li>
                        <li>Анализ на използваните формации</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">4. Ако играчът все още не е в SureGo:</h3>
                  <p className="ml-6">Можете да му изпратите инвайт линк по SMS, имейл или месинджър – той ще получи директна връзка за изтегляне на приложението и регистрация.</p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">5. Допълнителни възможности:</h3>
                  <ul className="list-disc ml-6 space-y-1 mt-1">
                    <li>Редактиране на профили по-късно</li>
                    <li>Промяна на позиции и роли</li>
                    <li>Индивидуална статистика за всеки играч</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-gradient-to-r from-[#fff9e6] to-[#fffdf5] p-4 rounded-md border border-[#fec000]/30">
                <p className="font-bold text-[#fec000]">🌟 След като конфигурирате играчите, ще можете:</p>
                <ul className="list-disc ml-6 space-y-1 mt-2">
                  <li>Да получавате автоматични предложения за оптимални състави</li>
                  <li>Да следите производителността по позиции</li>
                  <li>Да анализирате силните и слабите страни на отбора</li>
                </ul>
                <p className="mt-2">Приложението ще ви помогне да управлявате отбора професионално, като ви предоставя всички необходими инструменти за успех! ⚽📊</p>
              </div>
            </section>
            
            {/* Section 5 */}
            <section className="bg-gradient-to-br from-[#E7F6FF] to-white rounded-lg p-6 md:p-8 shadow-md border border-[#D3E4FD]">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#0f87e9]">Създаване на футболно събитие в SureGo</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">1. Стартиране на ново събитие:</h3>
                  <ul className="list-disc ml-6 space-y-1 mt-1">
                    <li>От екрана на отбора изберете „Събития"</li>
                    <li>Натиснете „+" (горен десен ъгъл)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">2. Основна информация:</h3>
                  <ul className="list-disc ml-6 space-y-1 mt-1">
                    <li>Въведете име и описание на събитието</li>
                    <li>Добавете място (с възможност за точна локация чрез „Карта" бутон)</li>
                    <li>Натиснете „Напред"</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">3. Настройки на мача:</h3>
                  <ul className="list-disc ml-6 space-y-1 mt-1">
                    <li>Изберете дата и начален час</li>
                    <li>Задайте продължителност (в минути)</li>
                    <li>
                      Изберете повторяемост:
                      <ul className="list-none ml-4 space-y-1 mt-1">
                        <li><span className="text-[#0f87e9]">🔹</span> Еднократно (само за този ден)</li>
                        <li><span className="text-[#0f87e9]">🔹</span> Ежеседмично (автоматично повторение)</li>
                      </ul>
                    </li>
                    <li>
                      Посочете брой отбори:
                      <ul className="list-none ml-4 space-y-1 mt-1">
                        <li><span className="font-medium text-[#0f87e9]">1 отбор</span> (игра срещу външен отбор - въведете име)</li>
                        <li><span className="font-medium text-[#0f87e9]">2 отбора</span> (вътрешен мач между играчите ви)</li>
                      </ul>
                    </li>
                    <li>Задайте минимален брой играчи</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">4. Покани за играчи:</h3>
                  <ul className="list-disc ml-6 space-y-1 mt-1">
                    <li>
                      Настройте времеви интервали за покани:
                      <ul className="list-none ml-4 space-y-1 mt-1">
                        <li><span className="font-medium text-[#0f87e9]">⏰ Основни играчи</span> (първи получават покана)</li>
                        <li><span className="font-medium text-[#0f87e9]">⏰ Резерви</span> (получават след основните)</li>
                        <li><span className="font-medium text-[#0f87e9]">⏰ Гости</span> (получават последни)</li>
                      </ul>
                    </li>
                    <li>
                      Задайте краен срок за потвърждение:
                      <ul className="list-none ml-4 space-y-1 mt-1">
                        <li><span className="font-medium text-[#0f87e9]">📅</span> Ако не се събере достатъчно играчи до този момент, събитието се отменя автоматично</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">5. Финанси и допълнения:</h3>
                  <ul className="list-disc ml-6 space-y-1 mt-1">
                    <li>
                      Въведете цена за участие (по избор):
                      <ul className="list-none ml-4 space-y-1 mt-1">
                        <li><span className="font-medium text-[#0f87e9]">💰</span> Възможност за закръгляване на сумата (остатъкът отива в хазната)</li>
                        <li><span className="font-medium text-[#0f87e9]">🎫</span> Безплатен вариант (ако желаете)</li>
                      </ul>
                    </li>
                    <li>Добавете бележки (по избор)</li>
                    <li>Завършете с „Създай събитие"</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="font-bold text-[#0f87e9]">✅ Готово! Събитието е активно и поканите са изпратени според зададените настройки.</p>
                
                <div className="bg-gradient-to-r from-[#fff9e6] to-[#fffdf5] p-4 rounded-md mt-4 border border-[#fec000]/30">
                  <p className="font-bold text-[#fec000]">🌟 Допълнителни възможности:</p>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>Автоматично балансиране на отборите (ако е вътрешен мач)</li>
                    <li>Проследяване на потвърждения в реално време</li>
                    <li>Известия за промени по събитието</li>
                    <li>Опция за автоматично попълване на липсващи играчи от резервите</li>
                  </ul>
                  
                  <p className="mt-2 italic">Приложението ще ви уведоми за всяка промяна в статуса на събитието и ще ви помогне да организирате перфектен мач без главоболия! ⚽📅</p>
                </div>
              </div>
            </section>
            
            {/* Section 6 */}
            <section className="bg-gradient-to-br from-[#E7F6FF] to-white rounded-lg p-6 md:p-8 shadow-md border border-[#D3E4FD]">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#0f87e9]">Управление на плащанията за събитие</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">Процес на регистрация на плащания:</h3>
                  <ol className="list-decimal ml-6 space-y-1 mt-2">
                    <li>Отворете желаното събитие като го изберете от предстоящи или минали</li>
                    <li>Натиснете бутона "$" в горния десен ъгъл</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">3. Екран за управление на плащания:</h3>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>Виждате списък с всички участници</li>
                    <li>В горната част се показва сумата за плащане (която може да се редактира)</li>
                    <li>
                      За всеки играч имате възможност да:
                      <ul className="list-disc ml-6 space-y-1 mt-1">
                        <li>Добавите допълнителна сума (остава в портфейла на играча за бъдещи събития)</li>
                        <li>Намалите сумата</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">4. Завършване на процеса:</h3>
                  <ol className="list-decimal ml-6 space-y-1 mt-2">
                    <li>Натиснете червения бутон в горния десен ъгъл</li>
                    <li>
                      Ще видите обобщение с:
                      <ul className="list-disc ml-6 space-y-1 mt-1">
                        <li>Цената на събитието</li>
                        <li>Общо събрана сума</li>
                        <li>Сума за хазната на отбора</li>
                      </ul>
                    </li>
                    <li>Потвърдете с "Да"</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">Допълнителна информация:</h3>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>
                      Ако има играчи, които не са платили, системата проверява:
                      <ul className="list-disc ml-6 space-y-1 mt-1">
                        <li>Дали хазната на отбора може да покрие липсващата сума</li>
                        <li>Ако няма достатъчно средства, процесът не може да бъде завършен</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-[#12e8f0]">Предимства на системата:</h3>
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li>Удобно управление на плащанията без необходимост от връщане на ресто</li>
                    <li>Пълна финансова прозрачност</li>
                    <li>Автоматични изчисления и баланси</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-gradient-to-r from-[#fff9e6] to-[#fffdf5] p-4 rounded-md border border-[#fec000]/30">
                <p><span className="font-bold text-[#fec000]">Пример:</span> Ако играч плати 20 лв. вместо 15 лв., оставащите 5 лв. се запазват в неговия баланс за следващи събития.</p>
                <p className="mt-2">Всички играчи имат достъп до своя баланс и история на плащанията, което гарантира прозрачност.</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Instructions;
