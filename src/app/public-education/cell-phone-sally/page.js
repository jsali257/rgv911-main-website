"use client";

import styles from "./page.module.css";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function CellPhoneSally() {
  const [currentGame, setCurrentGame] = useState(null);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showGameNav, setShowGameNav] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [message, setMessage] = useState({ text: '', type: '' }); // type can be 'error' or 'success'
  const [showPopup, setShowPopup] = useState(false);
  const [shakeButton, setShakeButton] = useState(null);
  const [dialedNumbers, setDialedNumbers] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  // Video state tracking removed
  
  // Reference for the games section
  const gamesSectionRef = useRef(null);
  
  // Sound effect references
  const correctSoundRef = useRef(null);
  const wrongSoundRef = useRef(null);
  const completeSoundRef = useRef(null);
  const clickSoundRef = useRef(null);

  // Game logic functions
  const startGame = (game) => {
    setCurrentGame(game);
    setScore(0);
    setGameCompleted(false);
    setMessage({ text: '', type: '' });
    setShowPopup(false);
    setDialedNumbers([]);
    setActiveButton(null);
    
    // Play click sound
    playSound('click');
    
    // Scroll to the games section
    if (gamesSectionRef.current) {
      gamesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Sound effect functions
  const playSound = (type) => {
    if (!soundEnabled) return;
    
    try {
      if (type === 'correct' && correctSoundRef.current) {
        correctSoundRef.current.currentTime = 0;
        correctSoundRef.current.play();
      } else if (type === 'wrong' && wrongSoundRef.current) {
        wrongSoundRef.current.currentTime = 0;
        wrongSoundRef.current.play();
      } else if (type === 'complete' && completeSoundRef.current) {
        completeSoundRef.current.currentTime = 0;
        completeSoundRef.current.play();
      } else if (type === 'click' && clickSoundRef.current) {
        clickSoundRef.current.currentTime = 0;
        clickSoundRef.current.play();
      }
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };
  
  // Toggle sound effects
  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };
  
  // Handle scroll to show/hide sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      if (gamesSectionRef.current) {
        const rect = gamesSectionRef.current.getBoundingClientRect();
        setShowGameNav(rect.top < 0 && currentGame !== null);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentGame]);

  const handleCorrectAnswer = () => {
    setScore(score + 1);
    playSound('correct');
    
    // Set success message based on the current scenario
    if (currentGame === 'emergency') {
      const scenario = [
        "Your little brother fell and has a small scrape on his knee.",
        "There&apos;s a fire in your kitchen.", 
        "You&apos;re home alone and a stranger is trying to get in.",
        "Your pet hamster is missing.",
        "Someone in your family can&apos;t breathe or wake up."
      ][score];
      
      if (score === 0 || score === 3) {
        setMessage({
          text: `Correct! ${scenario} This is NOT an emergency. Save 9-1-1 for life-threatening situations.`,
          type: 'success'
        });
      } else {
        setMessage({
          text: `Correct! ${scenario} This IS an emergency and you should call 9-1-1 right away!`,
          type: 'success'
        });
      }
    } else if (currentGame === 'dialing') {
      setMessage({
        text: "Great job! You&apos;re dialing 9-1-1 correctly!",
        type: 'success'
      });
    } else if (currentGame === 'address') {
      setMessage({
        text: "Perfect! Knowing your address helps emergency responders find you quickly!",
        type: 'success'
      });
    }
    
    setShowPopup(true);
    
    if (score >= 4) {
      setGameCompleted(true);
      setTimeout(() => playSound('complete'), 300);
    }
  };
  
  const handleWrongAnswer = (buttonType) => {
    playSound('wrong');
    setShakeButton(buttonType);
    
    // Set error message based on the current scenario
    if (currentGame === 'emergency') {
      const scenario = [
        "Your little brother fell and has a small scrape on his knee.",
        "There's a fire in your kitchen.", 
        "You're home alone and a stranger is trying to get in.",
        "Your pet hamster is missing.",
        "Someone in your family can't breathe or wake up."
      ][score];
      
      if (buttonType === 'yes') {
        setMessage({
          text: `This is NOT an emergency! ${scenario} You should only call 9-1-1 for real emergencies.`,
          type: 'error'
        });
      } else {
        setMessage({
          text: `This IS an emergency! ${scenario} You should call 9-1-1 right away!`,
          type: 'error'
        });
      }
    } else if (currentGame === 'dialing') {
      setMessage({
        text: "Oops! That&apos;s not the right number to press. Try again!",
        type: 'error'
      });
    } else if (currentGame === 'address') {
      setMessage({
        text: 'Make sure you know your complete address for emergencies!',
        type: 'error'
      });
    }
    
    setShowPopup(true);
    
    // Clear shake animation after a delay
    setTimeout(() => {
      setShakeButton(null);
    }, 500);
  };

  const resetGame = () => {
    setCurrentGame(null);
    setScore(0);
    setGameCompleted(false);
    setMessage({ text: '', type: '' });
    setShowPopup(false);
    playSound('click');
  };
  
  // Close the popup message
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.page}>
      {/* Floating Cell Phone Sally Icons */}
      <div className={styles.floatingIcons}>
        <div className={`${styles.floatingIcon} ${styles.icon1}`}>
          <span role="img" aria-hidden="true">📱</span>
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon2}`}>
          <span role="img" aria-hidden="true">📱</span>
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon3}`}>
          <span role="img" aria-hidden="true">📱</span>
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon4}`}>
          <span role="img" aria-hidden="true">📞</span>
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon5}`}>
          <span role="img" aria-hidden="true">📲</span>
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon6}`}>
          <span role="img" aria-hidden="true">📞</span>
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon7}`}>
          <span role="img" aria-hidden="true">📱</span>
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon8}`}>
          <span role="img" aria-hidden="true">📲</span>
        </div>
      </div>
      <Navbar />
      
      {/* Sticky Game Navigation */}
      {showGameNav && (
        <div className={styles.stickyGameNav}>
          <div className={styles.container}>
            <div className={styles.stickyGameNavContent}>
              <div className={styles.gameNavTitle}>
                <span role="img" aria-label="Game Controller">🎮</span> {currentGame === 'emergency' ? 'Emergency or Not?' : currentGame === 'dialing' ? 'Dial 9-1-1' : 'Know Your Address'}
              </div>
              <div className={styles.gameNavButtons}>
                <button onClick={() => startGame('emergency')} className={`${styles.gameNavButton} ${currentGame === 'emergency' ? styles.activeNavButton : ''}`}>
                  <span role="img" aria-label="Emergency Icon">🚨</span> Emergency
                </button>
                <button onClick={() => startGame('dialing')} className={`${styles.gameNavButton} ${currentGame === 'dialing' ? styles.activeNavButton : ''}`}>
                  <span role="img" aria-label="Phone Icon">📱</span> Dialing
                </button>
                <button onClick={() => startGame('address')} className={`${styles.gameNavButton} ${currentGame === 'address' ? styles.activeNavButton : ''}`}>
                  <span role="img" aria-label="House Icon">🏠</span> Address
                </button>
                <button onClick={resetGame} className={styles.gameNavButton}>
                  <span role="img" aria-label="Exit">❌</span> Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* <div className={styles.kidFriendlyHeader}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.kidTitle}>Meet Cell Phone Sally!</h1>
              <p className={styles.kidSubtitle}>Your 9-1-1 Friend in Emergencies</p>
            </div>
            <div className={styles.headerImageContainer}>
              <Image 
                src="/images/other/CellPhoneSally.png" 
                alt="Cell Phone Sally" 
                width={250} 
                height={250} 
                className={styles.sallyImage}
              />
            </div>
          </div>
        </div>
      </div> */}
      
      <main className={styles.main}>
        <section className={styles.sallySection}>
          <div className={styles.container}>
            <Breadcrumb />
            
            <div className={styles.introSection}>
              <h2>Meet Cell Phone Sally</h2>
              <p className={styles.introduction}>
                One of the most important things children need to know is what to do in an emergency.
              </p>
              
              <div className={styles.sallyQuote}>
                <div className={styles.sallyAvatar}>
                  <span className={styles.sallyCircle}></span>
                </div>
                <p>
                  <em>&ldquo;Hi there! My name is Cell Phone Sally! Did you know that you can use a cell phone like me to get help in an emergency?&rdquo;</em>
                </p>
              </div>
            </div>
            
            <div className={styles.aboutSally}>
              <div className={styles.aboutContent}>
                <div className={styles.aboutText}>
                  <p>
                    Cell Phone Sally is the popular 9-1-1 mascot who, along with her friends, teaches children various 9-1-1 life-saving skills. 
                    The job of Cell Phone Sally is to teach kids how to use 9-1-1 when they need police, the fire department, or an ambulance.
                  </p>
                </div>
                <div className={styles.aboutImage}>
                  <Image 
                    src="/images/other/CellPhoneSally.png" 
                    alt="Cell Phone Sally" 
                    width={200} 
                    height={200} 
                    className={styles.sallyContentImage}
                  />
                </div>
              </div>
            </div>
            
            <div className={styles.videoSection}>
              <h3>Watch Cell Phone Sally in Action</h3>
              <div className={styles.videoContainer}>
                <div className={styles.videoWrapper}>
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/4ntdwyY3B8c" 
                    title="Cell Phone Sally Video 1" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className={styles.videoWrapper}>
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/DEQVbYGEDEo" 
                    title="Cell Phone Sally Video 2" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div className={isFullscreen ? styles.fullscreenMode : styles.gamesSection} ref={gamesSectionRef}>
              {isFullscreen && (
                <div className={styles.fullscreenControls}>
                  <button 
                    className={styles.fullscreenButton}
                    onClick={() => {
                      setIsFullscreen(false);
                      playSound('click');
                    }}
                    aria-label="Exit fullscreen"
                  >
                    <span role="img" aria-hidden="true">❌</span>
                  </button>
                </div>
              )}
              <div className={isFullscreen ? styles.fullscreenGame : ''}>
                <div className={styles.gamesSectionHeader}>
                  <h2>Fun 9-1-1 Learning Games</h2>
                  <div className={styles.gamesBadge}>Interactive!</div>
                  {!isFullscreen && (
                    <div className={styles.fullscreenControls}>
                      <button 
                        className={styles.fullscreenButton}
                        onClick={() => {
                          setIsFullscreen(true);
                          playSound('click');
                          // Scroll to top of fullscreen mode
                          window.scrollTo(0, 0);
                        }}
                        aria-label="Enter fullscreen"
                      >
                        <span role="img" aria-hidden="true">⤢</span>
                      </button>
                    </div>
                  )}
                </div>
                <p className={styles.gamesIntro}>Play these fun games to learn about when and how to use 9-1-1 in an emergency! <span className={styles.gamesHighlight}>Click on any game to start playing!</span></p>
              
                <div className={styles.gameCards}>
                {!currentGame ? (
                  <>
                    <div className={styles.gameCard} onClick={() => startGame('emergency')}>
                      <div className={styles.gameCardIcon}>
                        <span role="img" aria-label="Emergency Icon">🚨</span>
                      </div>
                      <h3>Emergency or Not?</h3>
                      <p>Learn when to call 9-1-1 by identifying real emergencies</p>
                      <div className={styles.gameCardFooter}>
                        <span className={styles.gameLevel}>Level: Easy</span>
                        <button className={styles.playButton}>Play Now</button>
                      </div>
                    </div>
                    
                    <div className={styles.gameCard} onClick={() => startGame('dialing')}>
                      <div className={styles.gameCardIcon}>
                        <span role="img" aria-label="Phone Icon">📱</span>
                      </div>
                      <h3>Dial 9-1-1</h3>
                      <p>Practice dialing 9-1-1 and giving important information</p>
                      <div className={styles.gameCardFooter}>
                        <span className={styles.gameLevel}>Level: Medium</span>
                        <button className={styles.playButton}>Play Now</button>
                      </div>
                    </div>
                    
                    <div className={styles.gameCard} onClick={() => startGame('address')}>
                      <div className={styles.gameCardIcon}>
                        <span role="img" aria-label="House Icon">🏠</span>
                      </div>
                      <h3>Know Your Address</h3>
                      <p>Learn why knowing your address is important in an emergency</p>
                      <div className={styles.gameCardFooter}>
                        <span className={styles.gameLevel}>Level: Medium</span>
                        <button className={styles.playButton}>Play Now</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className={styles.activeGame}>
                    {currentGame === 'emergency' && (
                      <div className={styles.emergencyGame}>
                        <h3>Emergency or Not?</h3>
                        {!gameCompleted ? (
                          <>
                            <p>Is this an emergency? Click YES if you should call 9-1-1 or NO if you shouldn&apos;t.</p>
                            <div className={styles.scenario}>
                              <p>{[
                                "Your little brother fell and has a small scrape on his knee.",
                                "There&apos;s a fire in your kitchen.", 
                                "You&apos;re home alone and a stranger is trying to get in.",
                                "Your pet hamster is missing.",
                                "Someone in your family can&apos;t breathe or wake up."
                              ][score]}</p>
                            </div>
                            <div className={styles.gameButtons}>
                              <button 
                                onClick={() => score === 1 || score === 2 || score === 4 ? handleCorrectAnswer() : handleWrongAnswer('yes')}
                                className={`${styles.gameButton} ${shakeButton === 'yes' ? styles.shake : ''}`}
                              >
                                YES - Call 9-1-1
                              </button>
                              <button 
                                onClick={() => score === 0 || score === 3 ? handleCorrectAnswer() : handleWrongAnswer('no')}
                                className={`${styles.gameButton} ${shakeButton === 'no' ? styles.shake : ''}`}
                              >
                                NO - Don&apos;t Call 9-1-1
                              </button>
                            </div>
                            <p>Score: {score}/5</p>
                            
                            {/* Popup Message */}
                            {showPopup && message.text && (
                              <div className={styles.popupOverlay} onClick={closePopup}>
                                <div 
                                  className={`${styles.popupMessage} ${message.type === 'error' ? styles.errorPopup : styles.successPopup}`}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <div className={styles.popupIcon}>
                                    {message.type === 'error' ? (
                                      <span role="img" aria-label="Error">❌</span>
                                    ) : (
                                      <span role="img" aria-label="Success">✅</span>
                                    )}
                                  </div>
                                  <p>{message.text}</p>
                                  <button className={styles.popupCloseButton} onClick={closePopup}>
                                    Got it!
                                  </button>
                                </div>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className={styles.gameComplete}>
                            <div className={styles.confetti}></div>
                            <div className={styles.gameCompleteContent}>
                              <div className={styles.gameCompleteBadge}>
                                <span role="img" aria-label="Trophy">🏆</span>
                              </div>
                              <h3>Great job!</h3>
                              <p>You&apos;ve learned when to call 9-1-1 in an emergency!</p>
                              <div className={styles.gameCompleteButtons}>
                                <button onClick={resetGame} className={styles.resetButton}>Play Another Game</button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {currentGame === 'dialing' && (
                      <div className={styles.dialingGame}>
                        <h3>Dial 9-1-1</h3>
                        {!gameCompleted ? (
                          <>
                            <p>Practice dialing 9-1-1 by clicking the numbers in order</p>
                            <div className={styles.phoneDialer}>
                              <div className={styles.phoneScreen}>
                                <div className={styles.phoneScreenInner}>
                                  {dialedNumbers.map((num, index) => (
                                    <span key={index} className={styles.dialedNumber}>{num}</span>
                                  ))}
                                  <span className={styles.cursor}></span>
                                </div>
                                <div className={styles.expectedNumber}>
                                  Dial: <span className={styles.highlight}>9-1-1</span>
                                </div>
                              </div>
                              <div className={styles.phoneButtons}>
                                {[1,2,3,4,5,6,7,8,9].map(num => (
                                  <button 
                                    key={num} 
                                    onClick={() => {
                                      // Play click sound
                                      playSound('click');
                                      setActiveButton(num);
                                      setTimeout(() => setActiveButton(null), 200);
                                      
                                      const expectedSequence = [9, 1, 1];
                                      const nextExpectedNumber = expectedSequence[dialedNumbers.length];
                                      
                                      if (num === nextExpectedNumber) {
                                        // Correct number dialed
                                        const newDialed = [...dialedNumbers, num];
                                        setDialedNumbers(newDialed);
                                        
                                        if (newDialed.length === expectedSequence.length) {
                                          // All numbers dialed correctly
                                          setTimeout(() => {
                                            handleCorrectAnswer();
                                            setGameCompleted(true);
                                          }, 500);
                                        }
                                      } else {
                                        // Wrong number dialed
                                        handleWrongAnswer('dial');
                                        setDialedNumbers([]);
                                      }
                                    }}
                                    className={`${styles.phoneButton} ${activeButton === num ? styles.activePhoneButton : ''}`}
                                  >
                                    {num}
                                  </button>
                                ))}
                                <div className={styles.phoneButtonSpacer}></div>
                                <button 
                                  onClick={() => {
                                    playSound('click');
                                    setActiveButton(0);
                                    setTimeout(() => setActiveButton(null), 200);
                                    
                                    // Wrong number dialed
                                    handleWrongAnswer('dial');
                                    setDialedNumbers([]);
                                  }}
                                  className={`${styles.phoneButton} ${activeButton === 0 ? styles.activePhoneButton : ''}`}
                                >
                                  0
                                </button>
                                <div className={styles.phoneButtonSpacer}></div>
                              </div>
                              <div className={styles.phoneInstructions}>
                                <p>In an emergency, dial <strong>9-1-1</strong> to get help!</p>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className={styles.gameComplete}>
                            <div className={styles.confetti}></div>
                            <div className={styles.gameCompleteContent}>
                              <div className={styles.gameCompleteBadge}>
                                <span role="img" aria-label="Trophy">🏆</span>
                              </div>
                              <h3>Great job!</h3>
                              <p>You&apos;ve learned how to dial 9-1-1 in an emergency!</p>
                              <div className={styles.phoneScreenSuccess}>
                                <span>9-1-1</span>
                                <div className={styles.callAnimation}>
                                  <span className={styles.callDot}></span>
                                  <span className={styles.callDot}></span>
                                  <span className={styles.callDot}></span>
                                </div>
                                <div className={styles.callStatus}>Calling Emergency Services...</div>
                              </div>
                              <div className={styles.gameCompleteButtons}>
                                <button onClick={resetGame} className={styles.resetButton}>Play Another Game</button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {currentGame === 'address' && (
                      <div className={styles.addressGame}>
                        <h3>Know Your Address</h3>
                        <p>When you call 9-1-1, it&apos;s important to know your address so help can find you!</p>
                        
                        {!gameCompleted ? (
                          <div className={styles.addressActivity}>
                            <p>Practice writing down your address and memorizing it:</p>
                            <div className={styles.addressForm}>
                              <div className={styles.addressField}>
                                <label>Street Number:</label>
                                <input type="text" placeholder="123" />
                              </div>
                              <div className={styles.addressField}>
                                <label>Street Name:</label>
                                <input type="text" placeholder="Main Street" />
                              </div>
                              <div className={styles.addressField}>
                                <label>City:</label>
                                <input type="text" placeholder="Your City" />
                              </div>
                              <button 
                                onClick={() => {
                                  // Play success sound
                                  playSound('correct');
                                  
                                  // Show success message popup
                                  setMessage({
                                    text: "Great job! Knowing your address helps emergency responders find you quickly. Always remember your full address including street number, street name, and city.",
                                    type: 'success'
                                  });
                                  setShowPopup(true);
                                  
                                  // Complete the game immediately
                                  setGameCompleted(true);
                                  
                                  // Play completion sound after a short delay
                                  setTimeout(() => {
                                    playSound('complete');
                                    
                                    // Scroll to the game section to ensure completion message is visible
                                    if (gamesSectionRef.current) {
                                      gamesSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                  }, 300);
                                }}
                                className={styles.checkButton}
                              >
                                I Know My Address!
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className={styles.addressActivity}>
                            <div className={styles.gameComplete}>
                              <div className={styles.confetti}></div>
                              <div className={styles.gameCompleteContent}>
                                <div className={styles.gameCompleteBadge}>
                                  <span role="img" aria-label="Trophy">🏆</span>
                                </div>
                                <h3>Great job!</h3>
                                <p>Knowing your address is very important in an emergency!</p>
                                <div className={styles.addressSuccess}>
                                  <div className={styles.addressIcon}>🏠</div>
                                  <div className={styles.addressText}>Now you can help emergency responders find you!</div>
                                </div>
                                <div className={styles.gameCompleteButtons}>
                                  <button onClick={resetGame} className={styles.resetButton}>Play Another Game</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                </div>
              </div>
            </div>
            
            <div className={styles.contactSection}>
              <h3>Request a Visit</h3>
              <p>
                If you would like Cell Phone Sally to make an appearance at your event, contact Maribel at{" "}
                <a href="mailto:events@rgv911.org" className={styles.emailLink}>
                  events@rgv911.org
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Sound Effects */}
      <audio ref={correctSoundRef} preload="auto" src="/sounds/correct.mp3" />
      <audio ref={wrongSoundRef} preload="auto" src="/sounds/wrong.mp3" />
      <audio ref={completeSoundRef} preload="auto" src="/sounds/complete.mp3" />
      <audio ref={clickSoundRef} preload="auto" src="/sounds/click.mp3" />
      
      {/* Sound Toggle Button */}
      <button 
        onClick={toggleSound} 
        className={styles.soundToggle}
        aria-label={soundEnabled ? "Mute sounds" : "Enable sounds"}
      >
        {soundEnabled ? (
          <span role="img" aria-hidden="true">🔊</span>
        ) : (
          <span role="img" aria-hidden="true">🔇</span>
        )}
      </button>
    </div>
  );
}