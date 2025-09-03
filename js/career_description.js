const job = ["Data Scientist Intern", "Game Operations Specialist - Fresh Grad", "Combat Designer - Fresh Grad"]
const company = "Beyond Co., Ltd. (Singapore Office), Singapore"
const description = [`As a Data Scientist Intern, you will be a key part of our team in Singapore, helping to build a safer and more secure virtual world for our players. You will apply your skills in data science and machine learning to tackle complex challenges related to account security, payment fraud, and anti-bot systems. This is a great opportunity to gain hands-on experience in a fast-growing gaming company and contribute to a global community of fans.

                    Key responsibilities:
                    Responsible for developing data-driven risk control solutions and algorithm modeling including but not limited to account security, payment security, and anti-bot scenarios.
                    Apply data mining, data modeling and machine learning to extract risk patterns from raw data into meaningful insights.
                    Monitor and analyze malicious behaviors and risk cases through comprehensive data analytics and visualisation methods.
                    Collaborate with the operation team, business team, R&D team, and data team to design and optimize risk management.

                    What we would like to see:
                    Good understanding of data structures and algorithms.
                    In-depth understanding of common machine learning techniques.
                    Possess strong data analytics skills (with proficiency in Python and SQL).
                    Sensitive to data, logical and rigorous, with data visualization skills.
                    Familiar with large-scale data processing tools (Hive, Spark, Flink) is a plus.
                    Machine learning competition experience with good results is a plus.
                    Strong communication and teamwork skills.
                    Excellent written and verbal communication skills in English and advanced Chinese to liaise with teams and review internal documentation.

                    Salary range and compensation:
                    80,000-200,000 THB/monthly depending on skills and experience

                    Benefits: 
                    Competitive Compensation: A highly competitive salary, performance-based bonuses, and regular salary reviews.
                    Comprehensive Health & Wellness: Extensive health, dental, and life insurance plans for you and your family, along with access to professional mental health support.
                    Flexible Work Environment: Enjoy flexible work hours to help you achieve a better work-life balance.
                    Professional Growth: We provide a dedicated professional development fund for you to attend conferences and courses, along with clear career paths and mentorship programs.
                    Exclusive Gaming Perks: Get free access to our games, exclusive in-game items, and special discounts on our merchandise.
                    Creative Office Culture: Work in an office designed for creativity, complete with game rooms, relaxation areas, and a kitchen stocked with snacks and drinks.
                    Global Opportunities: Potential for relocation and collaboration with our teams in Singapore, Montreal, Los Angeles, Tokyo, and Seoul.`, 
                            
                            

                    `Are you a fresh graduate with a passion for gaming? As a Game Operations Specialist, you'll be at the heart of our game development and community. You'll work closely with developers to ensure our games meet player expectations and drive continuous improvement. Your role is crucial in managing content delivery, monitoring game performance, and turning player feedback into actionable insights. This is a fantastic opportunity to launch your career in the dynamic world of gaming operations.

                    Key responsibilities:
                    Collaborate closely with the game development team to provide critical insights and data, enabling developers to make informed decisions based on player feedback and analysis.
                    Manage and coordinate internal and external resources to ensure the continuous and stable delivery of high-quality content and services to players. Monitor version progress, resolve various live issues, and maintain the quality of game content.
                    Monitor and analyze community sentiment and player feedback, collecting and reporting relevant information to support strategic decision-making for project operations.

                    What we would like to see:
                    Bachelor’s degree or higher, with experience in gaming and community platforms, and a fundamental understanding of the gaming industry.
                    A strong passion for gaming, with in-depth knowledge and experience in ACG (Anime, Comics, and Games) titles, and the ability to accurately understand and anticipate user needs.
                    Excellent logical thinking, analytical, and summarisation skills.
                    Proven ability to drive projects forward in a collaborative, multi-stakeholder environment, demonstrating strong self-motivation, teamwork, and cross-functional coordination skills.
                    Strong communication skills in English, with working proficiency in Chinese (Mandarin) preferred to facilitate collaboration with team members and stakeholders from China.

                    Salary range and compensation:
                    100,000-200,000 THB/monthly depending on skills and experience

                    Benefits: 
                    Competitive Compensation: A highly competitive salary, performance-based bonuses, and regular salary reviews.
                    Comprehensive Health & Wellness: Extensive health, dental, and life insurance plans for you and your family, along with access to professional mental health support.
                    Flexible Work Environment: Enjoy flexible work hours to help you achieve a better work-life balance.
                    Professional Growth: We provide a dedicated professional development fund for you to attend conferences and courses, along with clear career paths and mentorship programs.
                    Exclusive Gaming Perks: Get free access to our games, exclusive in-game items, and special discounts on our merchandise.
                    Creative Office Culture: Work in an office designed for creativity, complete with game rooms, relaxation areas, and a kitchen stocked with snacks and drinks.
                    Global Opportunities: Potential for relocation and collaboration with our teams in Singapore, Montreal, Los Angeles, Tokyo, and Seoul.`,
                            
                            
                    `Are you a passionate gamer with a creative mind and a knack for building engaging combat experiences? As a Combat Designer, you will be at the forefront of bringing our characters and monsters to life. You’ll be responsible for crafting everything from their skills and behaviors to their overall feel. This is a unique opportunity to turn your passion for gaming into a career by collaborating with talented artists and programmers to design and build truly memorable gameplay.

                    Key responsibilities:
                    Design and produce characters or monsters, covering gameplay aspects, skills, AI, artistic performance, and ecological attributes.
                    Foster open communication with fellow game designers and artists to synchronize numerical design, layout, level gameplay, and artistic performance. Through this collaborative process, identify new production pipeline requests, and follow up on their development progress.
                    Identify requests for new mechanisms and functions during game production; collaborate closely with programmers to determine solutions and follow up on their development status.

                    What we would like to see:
                    Passion for games with extensive player experience across a variety of genres, including action games, open-world games, RPGs, and more. Possess a deep understanding of game combat mechanics.
                    Proficient in at least one commercial game engine with the capability to independently create simple prototypes.

                    Bonus Points:
                    Experience in Unity development and a programming or technical foundation for understanding code.
                    Experience in creating game demos.

                    Application Instructions:
                    Please provide details of your personal gaming experience and any relevant works (if applicable). Your gaming experience should include the names of games you have played, the duration of gameplay, and any notable achievements you have earned.

                    Salary range and compensation:
                    90,000-200,000 THB/monthly depending on skills and experience

                    Benefits: 
                    Competitive Compensation: A highly competitive salary, performance-based bonuses, and regular salary reviews.
                    Comprehensive Health & Wellness: Extensive health, dental, and life insurance plans for you and your family, along with access to professional mental health support.
                    Flexible Work Environment: Enjoy flexible work hours to help you achieve a better work-life balance.
                    Professional Growth: We provide a dedicated professional development fund for you to attend conferences and courses, along with clear career paths and mentorship programs.
                    Exclusive Gaming Perks: Get free access to our games, exclusive in-game items, and special discounts on our merchandise.
                    Creative Office Culture: Work in an office designed for creativity, complete with game rooms, relaxation areas, and a kitchen stocked with snacks and drinks.
                    Global Opportunities: Potential for relocation and collaboration with our teams in Singapore, Montreal, Los Angeles, Tokyo, and Seoul.`]

const params = new URLSearchParams(window.location.search);
const receivedId = params.get("id");
        
// เอาค่าจาก tag ใน html มาเป็นตัวเเปร
const job_select = document.getElementById("job_select")
const location_job_select = document.getElementById("location_job_select")
const description_job_select = document.getElementById("description_job_select")

function formatDescription(text) {
    // แปลงหัวข้อเป็น <h1>
    return text
        .replace(/Key responsibilities:/g, '<h2>Key responsibilities:</h2>')
        .replace(/What we would like to see:/g, '<h2>What we would like to see:</h2>')
        .replace(/Salary range and compensation:/g, '<h2>Salary range and compensation:</h2>')
        .replace(/Benefits:/g, '<h2>Benefits:</h2>');
}

// เอาข้อความจาก javascript เข้า html
job_select.innerText = job[receivedId - 1];
location_job_select.innerText = company;
description_job_select.innerHTML = formatDescription(description[receivedId - 1]);

function applyJob(){
    window.location.href = `form_apply_job.html?id=${receivedId}`;
}