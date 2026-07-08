const SECRETS = [
{id:1,category:"generic",title:"Multiply Anything by 11 in Your Head",keywords:["multiply","11","fast"],
simple:"The 11 trick makes people think you’re a human calculator. It works because of place value.",
how:"Step 1: Write the number. Step 2: Add each pair of neighboring digits. Step 3: Put the sum between them. If sum is 10 or more, carry the 1 to the left.",
examples:[
{q:"23 times 11",a:"Step 1: 2 _ 3. Step 2: 2 plus 3 equals 5. Step 3: Put 5 in middle. Answer is 253"},
{q:"47 times 11",a:"4 _ 7. 4 plus 7 equals 11. Put 1, carry 1. Answer is 517"},
{q:"68 times 11",a:"6 _ 8. 6 plus 8 equals 14. Put 4, carry 1. Answer is 748"},
{q:"99 times 11",a:"9 _ 9. 9 plus 9 equals 18. Put 8, carry 1. Answer is 1089"},
{q:"123 times 11",a:"For 3 digits: 1, then 1 plus 2, then 2 plus 3, then 3. Answer is 1353"}
],
examTip:"This works because 11 equals 10 plus 1. So 23 times 11 equals 230 plus 23."},

{id:2,category:"generic",title:"Square Any Number Ending in 5",keywords:["square","5"],
simple:"Numbers like 25, 35, 105 can be squared in 2 seconds without multiplication.",
how:"Step 1: Take the digit before the 5. Step 2: Multiply it by the next number. Step 3: Put 25 at the end. Reason: 25 equals 100 times n times n plus 1 plus 25",
examples:[
{q:"25 squared",a:"2 times 3 equals 6. Put 25 at end. Answer is 625"},
{q:"35 squared",a:"3 times 4 equals 12. Put 25. Answer is 1225"},
{q:"65 squared",a:"6 times 7 equals 42. Put 25. Answer is 4225"},
{q:"85 squared",a:"8 times 9 equals 72. Put 25. Answer is 7225"},
{q:"105 squared",a:"10 times 11 equals 110. Put 25. Answer is 11025"}
],
examTip:"This is why 5 squared is always 25. Use it for speed math tests."},

{id:3,category:"generic",title:"Multiply by 9 Using Your Fingers",keywords:["multiply","9"],
simple:"The finger trick for 9 times table. Works every time and kids love it.",
how:"Step 1: Hold up 10 fingers. Step 2: To do 9 times 4, fold down the 4th finger. Step 3: Count fingers left of folded finger for tens, right for ones.",
examples:[
{q:"9 times 3",a:"Fold 3rd finger. 2 fingers left, 7 right. Answer is 27"},
{q:"9 times 6",a:"Fold 6th finger. 5 left, 4 right. Answer is 54"},
{q:"9 times 8",a:"Fold 8th finger. 7 left, 2 right. Answer is 72"},
{q:"9 times 1",a:"Fold 1st finger. 0 left, 9 right. Answer is 09"},
{q:"9 times 10",a:"Fold 10th finger. 9 left, 0 right. Answer is 90"}
],
examTip:"The digits always add to 9. 2 plus 7 equals 9, 5 plus 4 equals 9."},

{id:4,category:"generic",title:"Find Any Percentage Without Calculator",keywords:["percentage","percent"],
simple:"Flip the numbers. X percent of Y is exactly the same as Y percent of X. But one is usually easier.",
how:"Step 1: See which one is easier to do in your head. Step 2: Flip them. Step 3: Calculate.",
examples:[
{q:"8 percent of 50",a:"Hard to do 8 percent. Flip: 50 percent of 8. Half of 8 is 4"},
{q:"25 percent of 64",a:"Flip: 64 percent of 25. Quarter of 64 is 16"},
{q:"10 percent of 300",a:"Flip: 300 percent of 10. 3 times 10 is 30"},
{q:"12 percent of 50",a:"Flip: 50 percent of 12. Half of 12 is 6"},
{q:"20 percent of 75",a:"Flip: 75 percent of 20. One fifth of 75 is 15"}
],
examTip:"Use this for discounts. 19 percent off 250 is same as 250 percent of 19."},

{id:5,category:"generic",title:"Check if a Number Divides by 11",keywords:["division","11"],
simple:"Fast divisibility test. No long division needed.",
how:"Step 1: Add digits in odd positions. Step 2: Add digits in even positions. Step 3: Subtract. If result is 0 or multiple of 11, it divides.",
examples:[
{q:"121",a:"Odd: 1 plus 1 equals 2. Even: 2. 2 minus 2 equals 0. Yes it divides"},
{q:"242",a:"Odd: 2 plus 2 equals 4. Even: 4. 4 minus 4 equals 0. Yes"},
{q:"1234",a:"Odd: 1 plus 3 equals 4. Even: 2 plus 4 equals 6. 4 minus 6 equals minus 2. No"},
{q:"1331",a:"Odd: 1 plus 3 equals 4. Even: 3 plus 1 equals 4. 4 minus 4 equals 0. Yes"},
{q:"4565",a:"Odd: 4 plus 6 equals 10. Even: 5 plus 5 equals 10. 10 minus 10 equals 0. Yes"}
],
examTip:"Used to factor big numbers quickly in exams."},

{id:6,category:"generic",title:"Multiply Numbers Near 100",keywords:["multiply","100"],
simple:"Vedic math trick for 98, 97, 102 etc. No long multiplication.",
how:"Step 1: Find how far each number is from 100. Step 2: Subtract crosswise. Step 3: Multiply the differences and put at end.",
examples:[
{q:"98 times 97",a:"98 is 2 less. 97 is 3 less. 98 minus 3 equals 95. 2 times 3 equals 06. Answer is 9506"},
{q:"99 times 98",a:"99 is 1 less. 98 is 2 less. 99 minus 2 equals 97. 1 times 2 equals 02. Answer is 9702"},
{q:"102 times 103",a:"102 is 2 more. 103 is 3 more. 102 plus 3 equals 105. 2 times 3 equals 06. Answer is 10506"},
{q:"97 times 96",a:"97 is 3 less. 96 is 4 less. 97 minus 4 equals 93. 3 times 4 equals 12. Answer is 9312"},
{q:"101 times 104",a:"101 is 1 more. 104 is 4 more. 101 plus 4 equals 105. 1 times 4 equals 04. Answer is 10504"}
],
examTip:"Works for any base. Can also do near 1000."},

{id:7,category:"generic",title:"Find Unit Digit of Big Powers",keywords:["unit digit","power"],
simple:"What is last digit of 7 to the power 23. You don’t multiply 23 times.",
how:"Step 1: Look at cycle of last digits. Step 2: Divide power by 4. Step 3: Use remainder to pick digit from cycle.",
examples:[
{q:"Last digit of 3 to the power 10",a:"3 cycle: 3,9,7,1. 10 divided by 4 leaves 2. 2nd digit is 9"},
{q:"Last digit of 7 to the power 23",a:"7 cycle: 7,9,3,1. 23 divided by 4 leaves 3. 3rd digit is 3"},
{q:"Last digit of 2 to the power 8",a:"2 cycle: 2,4,8,6. 8 divided by 4 leaves 0. Last digit is 6"},
{q:"Last digit of 4 to the power 100",a:"4 cycle: 4,6. Even power ends in 6"},
{q:"Last digit of 9 to the power 15",a:"9 cycle: 9,1. Odd power ends in 9"}
],
examTip:"Competition exams like SSC, Bank ask this every year."},

{id:8,category:"generic",title:"Quick Profit and Loss Trick",keywords:["profit","loss"],
simple:"How to calculate profit percent in 5 seconds.",
how:"Step 1: Profit equals Selling minus Cost. Step 2: Divide profit by Cost. Step 3: Multiply by 100.",
examples:[
{q:"Bought for 100, sold for 120",a:"Profit is 20. 20 divided by 100 times 100 equals 20 percent profit"},
{q:"Bought for 200, sold for 150",a:"Loss is 50. 50 divided by 200 times 100 equals 25 percent loss"},
{q:"Bought for 80, sold for 100",a:"Profit is 20. 20 divided by 80 times 100 equals 25 percent profit"},
{q:"Bought for 500, sold for 625",a:"Profit is 125. 125 divided by 500 times 100 equals 25 percent profit"},
{q:"Bought for 40, sold for 32",a:"Loss is 8. 8 divided by 40 times 100 equals 20 percent loss"}
],
examTip:"Always divide by cost price. This is where most people make mistakes."},

{id:9,category:"generic",title:"Time Speed Distance Tricks",keywords:["time","speed","distance"],
simple:"The triangle formula. Cover any 2 and you get the 3rd.",
how:"Distance equals Speed times Time. Rearrange for others.",
examples:[
{q:"Car goes 60 km per hour for 2 hours",a:"60 times 2 equals 120 km"},
{q:"Distance 300 km, time 5 hours",a:"300 divided by 5 equals 60 km per hour"},
{q:"Distance 150 km, speed 50 km per hour",a:"150 divided by 50 equals 3 hours"},
{q:"Train 90 km per hour for 45 minutes",a:"45 minutes equals 0.75 hours. 90 times 0.75 equals 67.5 km"},
{q:"Two cars 60 and 40 km per hour towards each other",a:"Relative speed is 100 km per hour. They close gap faster"}
],
examTip:"Convert minutes to hours by dividing by 60."},

{id:10,category:"generic",title:"LCM and HCF in 10 Seconds",keywords:["lcm","hcf"],
simple:"HCF is biggest number that divides both. LCM is smallest number both divide.",
how:"Step 1: For HCF find common factors. Step 2: For LCM use formula LCM times HCF equals product.",
examples:[
{q:"HCF of 12 and 18",a:"Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. Common biggest is 6"},
{q:"LCM of 4 and 6",a:"4 times 6 equals 24. HCF is 2. 24 divided by 2 equals 12"},
{q:"HCF of 20 and 25",a:"Common factor is 5"},
{q:"LCM of 7 and 8",a:"No common factor. So 7 times 8 equals 56"},
{q:"HCF of 48 and 60",a:"12 divides both. Answer is 12"}
],
examTip:"If numbers are co-prime, HCF is 1 and LCM is product."},

{id:11,category:"generic",title:"Average Speed for Two Trips",keywords:["average","speed"],
simple:"If you go and come back at different speeds, average is not add and divide by 2.",
how:"Use harmonic mean: 2 times S1 times S2 divided by S1 plus S2. This is because distance is same.",
examples:[
{q:"Go 40, return 60",a:"2 times 40 times 60 divided by 100 equals 48 kmph"},
{q:"Go 30, return 70",a:"2 times 30 times 70 divided by 100 equals 42 kmph"},
{q:"Go 50, return 50",a:"Same speed. Average is 50"},
{q:"Go 20, return 80",a:"2 times 20 times 80 divided by 100 equals 32 kmph"},
{q:"Go 10, return 90",a:"2 times 10 times 90 divided by 100 equals 18 kmph"}
],
examTip:"Only works when distance for both trips is equal."},

{id:12,category:"generic",title:"Compound Interest Shortcut",keywords:["interest","compound"],
simple:"Interest on interest. Money grows faster than simple interest.",
how:"Amount equals Principal times 1 plus R over 100 to the power N. CI equals Amount minus Principal.",
examples:[
{q:"1000 at 10 percent for 2 years",a:"1000 times 1.1 times 1.1 equals 1210. CI is 210"},
{q:"5000 at 5 percent for 3 years",a:"5000 times 1.05 cubed equals about 5788. CI is 788"},
{q:"2000 at 20 percent for 2 years",a:"2000 times 1.2 times 1.2 equals 2880. CI is 880"},
{q:"10000 at 8 percent for 1 year",a:"10000 times 1.08 equals 10800. CI is 800"},
{q:"500 at 12 percent for 2 years",a:"500 times 1.12 times 1.12 equals 627.2. CI is 127.2"}
],
examTip:"Rule of 72: Money doubles in 72 divided by rate years."},

  {id:13,category:"generic",title:"Mixture and Alligation",keywords:["mixture","ratio"],
simple:"Mixing two things with different prices to get average price.",
how:"Draw a line. Put cheaper and dearer price. Difference gives ratio to mix.",
examples:[
{q:"Mix 20 per kg and 30 per kg to get 25 per kg",a:"Differences: 25 minus 20 equals 5. 30 minus 25 equals 5. Ratio 1 to 1"},
{q:"Mix tea 50 and 70 to get 60",a:"Differences: 10 and 10. Ratio 1 to 1"},
{q:"Mix milk 40 and 60 to get 50",a:"Differences: 10 and 10. Ratio 1 to 1"},
{q:"Mix 100 and 200 to get 160",a:"Differences: 60 and 40. Ratio 3 to 2"},
{q:"Mix 10 and 40 to get 25",a:"Differences: 15 and 15. Ratio 1 to 1"}
],
examTip:"The item with bigger difference needs smaller quantity."},

{id:14,category:"generic",title:"Age Problems Made Easy",keywords:["age","ratio"],
simple:"Age difference never changes. Use that.",
how:"Step 1: Take present ages. Step 2: Add or subtract years. Step 3: Make equation.",
examples:[
{q:"Father 3 times son. Sum is 40",a:"4 parts equals 40. Son is 10, father is 30"},
{q:"After 5 years father will be 2 times son",a:"Let son be x. 3x plus 5 equals 2 times x plus 5. Solve x equals 5"},
{q:"Difference of ages is 20. Ratio is 3 to 1",a:"2 parts equals 20. So 1 part equals 10. Ages are 30 and 10"},
{q:"5 years ago father was 4 times son",a:"Father minus 5 equals 4 times son minus 5"},
{q:"In 10 years ratio will be 2 to 1",a:"Father plus 10 equals 2 times son plus 10"}
],
examTip:"Difference in ages is constant throughout life."},

{id:15,category:"generic",title:"Train Problems",keywords:["train","speed"],
simple:"Train crossing pole, bridge, or another train.",
how:"Step 1: If pole, distance equals length of train. Step 2: If bridge, add lengths. Step 3: Convert kmph to mps.",
examples:[
{q:"Train 200 meters at 72 km per hour crosses pole",a:"72 kmph equals 20 mps. 200 divided by 20 equals 10 seconds"},
{q:"Train crosses 300 meter bridge",a:"Distance equals train length plus 300"},
{q:"Two trains opposite direction",a:"Add speeds to get relative speed"},
{q:"Two trains same direction",a:"Subtract speeds to get relative speed"},
{q:"Train passes man in 10 seconds",a:"Speed equals length divided by 10"}
],
examTip:"Convert kmph to mps by multiplying by 5 divided by 18."},

{id:16,category:"generic",title:"Boats and Streams",keywords:["boat","stream"],
simple:"Water helps or slows the boat.",
how:"Downstream equals boat speed plus stream. Upstream equals boat minus stream.",
examples:[
{q:"Boat 10, stream 2 downstream",a:"10 plus 2 equals 12 kmph"},
{q:"Boat 10, stream 2 upstream",a:"10 minus 2 equals 8 kmph"},
{q:"Downstream 24, upstream 16",a:"Boat speed is 24 plus 16 divided by 2 equals 20"},
{q:"Takes 4 hours downstream, 6 upstream for same distance",a:"Set distance over 12 equals distance over 8"},
{q:"Stream speed is half boat speed",a:"Let boat be 2x, stream be x"}
],
examTip:"Boat speed in still water is average of up and down."},

{id:17,category:"generic",title:"Work and Pipes",keywords:["work","pipes"],
simple:"How fast people or pipes do work together.",
how:"Add 1 day work of each. Take reciprocal for total time.",
examples:[
{q:"A in 10 days, B in 15 days together",a:"1 over 10 plus 1 over 15 equals 1 over 6. 6 days"},
{q:"Pipe A fills in 20 minutes, B empties in 30",a:"1 over 20 minus 1 over 30 equals 1 over 60. 60 minutes"},
{q:"A in 5 days, B in 10, C in 15",a:"Add all three reciprocals"},
{q:"A and B together in 12 days",a:"Their combined 1 day work is 1 over 12"},
{q:"A is twice as fast as B",a:"If B takes x days, A takes x over 2"}
],
examTip:"Negative sign means emptying."},

{id:18,category:"generic",title:"Ratio and Proportion",keywords:["ratio","proportion"],
simple:"Compare two quantities.",
how:"Write as fraction. Cross multiply to find missing value.",
examples:[
{q:"Ratio 2 to 3. Sum is 50",a:"5 parts equals 50. 1 part equals 10. So 20 and 30"},
{q:"4 to 5 equals x to 20",a:"Cross multiply. 4 times 20 divided by 5. x equals 16"},
{q:"Divide 100 in ratio 3 to 2",a:"3 plus 2 equals 5. 100 divided by 5 equals 20. So 60 and 40"},
{q:"A to B is 3 to 4, B to C is 5 to 6",a:"Make B same. Answer is 15 to 20 to 24"},
{q:"Continued proportion a to b to c",a:"b squared equals a times c"}
],
examTip:"In proportion, product of extremes equals product of means."},

{id:19,category:"generic",title:"Calendar and Days",keywords:["calendar","day"],
simple:"Find day of week for any date.",
how:"Count odd days. 365 days equals 52 weeks plus 1 odd day.",
examples:[
{q:"Odd days in 1 normal year",a:"365 divided by 7 leaves 1 odd day"},
{q:"Odd days in leap year",a:"366 divided by 7 leaves 2 odd days"},
{q:"Jan 1 2024 is Monday",a:"2024 is leap. So 2025 Jan 1 is Wednesday"},
{q:"100 years has 5 odd days",a:"Used to find century day"},
{q:"Find day after 50 days",a:"50 divided by 7 leaves 1. So next day"}
],
examTip:"Sunday 0, Monday 1, Tuesday 2, and so on."},

{id:20,category:"generic",title:"Simple Interest vs Compound Interest",keywords:["interest","simple"],
simple:"Difference between flat and growing interest.",
how:"SI is flat each year. CI grows each year.",
examples:[
{q:"1000 at 10 percent for 2 years simple",a:"100 plus 100. Total 200"},
{q:"1000 at 10 percent for 2 years compound",a:"100 plus 110. Total 210"},
{q:"Difference after 2 years",a:"10"},
{q:"Difference after 3 years",a:"About 31"},
{q:"When are they equal",a:"Only for 1 year"}
],
examTip:"CI minus SI for 2 years equals P times R squared divided by 100 squared."},

  {id:21,category:"university",title:"Integration by Parts The Easy Way",keywords:["calculus","integral"],
simple:"When you have product of two different types of functions.",
how:"Use LIATE rule to pick u. Log, Inverse trig, Algebra, Trig, Exponential. Formula: Integral u dv equals u v minus integral v du.",
examples:[
{q:"Integral of x cos x",a:"u equals x, dv equals cos x dx. du equals dx, v equals sin x. Answer is x sin x plus cos x plus C"},
{q:"Integral of x e to the x",a:"u equals x, dv equals e to the x dx. Answer is x e to the x minus e to the x plus C"},
{q:"Integral of ln x",a:"u equals ln x, dv equals dx. Answer is x ln x minus x plus C"},
{q:"Integral of x squared sin x",a:"Do parts twice. Answer is minus x squared cos x plus 2x sin x plus 2 cos x plus C"},
{q:"Integral of arctan x",a:"u equals arctan x, dv equals dx. Answer is x arctan x minus half ln 1 plus x squared plus C"}
],
examTip:"Don't forget plus C. Choose u as the one that gets simpler when differentiated."},

{id:22,category:"university",title:"Derivatives Using Power Rule",keywords:["derivative","calculus"],
simple:"How fast a function changes at any point.",
how:"Bring power down, reduce power by 1. Derivative of constant is 0.",
examples:[
{q:"Derivative of x squared",a:"2x"},
{q:"Derivative of x cubed",a:"3x squared"},
{q:"Derivative of 5x",a:"5"},
{q:"Derivative of 7",a:"0"},
{q:"Derivative of 1 over x",a:"Minus 1 over x squared"}
],
examTip:"Power rule is the foundation. Master this first."},

{id:23,category:"university",title:"Limits Without Panic",keywords:["limit","calculus"],
simple:"Value a function approaches as x gets close to a number.",
how:"Step 1: Try direct substitution. Step 2: If 0 over 0, factor. Step 3: If still fails, use L hospital.",
examples:[
{q:"Limit of x squared as x goes to 2",a:"Plug 2. Answer is 4"},
{q:"Limit of sin x over x as x goes to 0",a:"Standard limit. Answer is 1"},
{q:"Limit of x squared minus 4 over x minus 2",a:"Factor numerator. Cancel x minus 2. Answer is 4"},
{q:"Limit of 1 over x as x goes to infinity",a:"Answer is 0"},
{q:"Limit of e to the x as x goes to 0",a:"Answer is 1"}
],
examTip:"If you get 0 over 0, it means there is a hidden factor."},

{id:24,category:"university",title:"Eigenvalues of a 2 by 2 Matrix",keywords:["eigenvalue","matrix"],
simple:"Special numbers that tell how a matrix stretches space.",
how:"Solve determinant of A minus lambda I equals 0. This gives characteristic equation.",
examples:[
{q:"Matrix 2 1 1 2",a:"Determinant equals lambda squared minus 4 lambda plus 3. Lambda is 1 and 3"},
{q:"Matrix 3 0 0 2",a:"Diagonal matrix. Eigenvalues are 3 and 2"},
{q:"Matrix 0 1 minus 1 0",a:"Lambda squared plus 1 equals 0. Lambda is i and minus i"},
{q:"Matrix 1 1 0 1",a:"Repeated eigenvalue. Lambda is 1 and 1"},
{q:"Matrix 4 2 2 4",a:"Lambda is 2 and 6"}
],
examTip:"Sum of eigenvalues equals trace. Product equals determinant."},

{id:25,category:"university",title:"Taylor Series Approximation",keywords:["taylor","series"],
simple:"Turn any scary function into a polynomial.",
how:"f of x equals f of a plus f prime of a times x minus a over 1 factorial plus f double prime of a times x minus a squared over 2 factorial and so on.",
examples:[
{q:"Taylor of e to the x at 0",a:"1 plus x plus x squared over 2 plus x cubed over 6"},
{q:"Taylor of sin x at 0",a:"x minus x cubed over 6 plus x to the 5 over 120"},
{q:"Taylor of cos x at 0",a:"1 minus x squared over 2 plus x to the 4 over 24"},
{q:"Taylor of ln 1 plus x at 0",a:"x minus x squared over 2 plus x cubed over 3"},
{q:"First order Taylor",a:"f of a plus f prime of a times x minus a"}
],
examTip:"Used to approximate sin, cos, e to the x when calculator not allowed."},

{id:26,category:"university",title:"Solving First Order ODE",keywords:["ode","differential"],
simple:"Equation with derivative and function.",
how:"Method 1: Separate variables. Method 2: Integrating factor for linear ODE.",
examples:[
{q:"dy dx equals x",a:"Integrate both sides. y equals x squared over 2 plus C"},
{q:"dy dx equals y",a:"Separate. dy over y equals dx. Answer is y equals C e to the x"},
{q:"dy dx plus 2y equals 0",a:"Integrating factor e to the 2x. Answer is y equals C e to the minus 2x"},
{q:"dy dx equals 2x",a:"Answer is y equals x squared plus C"},
{q:"dy dx equals 3y",a:"Answer is y equals C e to the 3x"}
],
examTip:"Always check answer by differentiating."},

{id:27,category:"university",title:"Probability Basics",keywords:["probability","chance"],
simple:"Chance of an event happening.",
how:"Probability equals number of favorable outcomes divided by total outcomes.",
examples:[
{q:"Chance of head in coin toss",a:"1 favorable out of 2 total. Answer is 1 over 2"},
{q:"Chance of 6 on dice",a:"1 out of 6"},
{q:"Chance of ace in cards",a:"4 aces out of 52 cards"},
{q:"Chance of even number on dice",a:"3 out of 6 equals half"},
{q:"Chance of red card",a:"26 red cards out of 52 equals half"}
],
examTip:"Probability is always between 0 and 1."},

{id:28,category:"university",title:"Matrix Multiplication",keywords:["matrix","multiply"],
simple:"Row of first times column of second.",
how:"Step 1: Check columns of first equals rows of second. Step 2: Multiply and add.",
examples:[
{q:"1 2 times 3 4",a:"1 times 3 plus 2 times 4 equals 11"},
{q:"2 by 2 times 2 by 2",a:"Do 4 such multiplications"},
{q:"Identity matrix times anything",a:"You get the same matrix back"},
{q:"Zero matrix times anything",a:"You get zero matrix"},
{q:"Check dimensions first",a:"2 by 3 times 3 by 2 works. Gives 2 by 2"}
],
examTip:"AB does not equal BA in general."},

  {id:29,category:"university",title:"Vectors Dot Product",keywords:["vector","dot"],
simple:"Measures how much two vectors point in same direction.",
how:"Multiply matching components and add. Also equals magnitude1 times magnitude2 times cos theta.",
examples:[
{q:"1 2 dot 3 4",a:"1 times 3 plus 2 times 4 equals 11"},
{q:"1 0 dot 0 1",a:"0. Vectors are perpendicular"},
{q:"2 2 dot 2 2",a:"8"},
{q:"Dot product with itself",a:"Gives length squared"},
{q:"If dot product is 0",a:"Vectors are perpendicular"}
],
examTip:"Used in physics for work equals force dot displacement."},

{id:30,category:"university",title:"Complex Numbers",keywords:["complex","i"],
simple:"Numbers with real and imaginary part. i squared equals minus 1.",
how:"Add real with real, imaginary with imaginary. Multiply using FOIL.",
examples:[
{q:"3 plus 4i plus 1 plus 2i",a:"4 plus 6i"},
{q:"i times i",a:"Minus 1"},
{q:"2 plus 3i times 1 plus i",a:"2 plus 2i plus 3i plus 3i squared equals minus 1 plus 5i"},
{q:"Magnitude of 3 plus 4i",a:"Square root of 3 squared plus 4 squared equals 5"},
{q:"Conjugate of 2 minus 3i",a:"2 plus 3i"}
],
examTip:"Used in AC circuits and signal processing."},

{id:31,category:"university",title:"Divergence of a Vector Field",keywords:["divergence","vector"],
simple:"Tells if field is a source or sink.",
how:"Del dot F. Add partial derivative of each component.",
examples:[
{q:"Field x y z",a:"1 plus 1 plus 1 equals 3"},
{q:"Field x squared y z",a:"2x plus 0 plus 0"},
{q:"Field 0 0 z",a:"1"},
{q:"Field x y 0",a:"2"},
{q:"If divergence is 0",a:"Field is incompressible like water"}
],
examTip:"Positive divergence means source. Negative means sink."},

{id:32,category:"university",title:"Curl of a Vector Field",keywords:["curl","rotation"],
simple:"Measures rotation or spinning of field.",
how:"Del cross F. Use determinant.",
examples:[
{q:"Field minus y x 0",a:"Curl points in z direction. It spins"},
{q:"Field x y z",a:"Curl is 0. No rotation"},
{q:"If curl is 0",a:"Field is conservative"},
{q:"Curl of gradient",a:"Always 0"},
{q:"Curl measures rotation",a:"Like whirlpool in water"}
],
examTip:"Right hand rule gives direction of curl."},

{id:33,category:"university",title:"Multiple Integrals",keywords:["integral","double"],
simple:"Integral over area or volume instead of line.",
how:"Do inner integral first, then outer.",
examples:[
{q:"Integral x from 0 to 1 and 0 to 2",a:"Integrate x dx from 0 to 1 gives half. Then integrate dy from 0 to 2 gives 1"},
{q:"Area under curve",a:"Single integral"},
{q:"Volume under surface",a:"Double integral"},
{q:"Change order of integration",a:"Sometimes makes it easier"},
{q:"Polar coordinates",a:"Use r dr d theta"}
],
examTip:"Draw region first to set limits."},

{id:34,category:"university",title:"Bayes Theorem",keywords:["bayes","probability"],
simple:"Update probability when new evidence comes.",
how:"P of A given B equals P of B given A times P of A divided by P of B.",
examples:[
{q:"Disease test 99 percent accurate",a:"Use Bayes to find real chance you have disease"},
{q:"Spam filter",a:"Updates probability email is spam based on words"},
{q:"Medical diagnosis",a:"Updates after test result"},
{q:"Weather forecast",a:"Updates with new satellite data"},
{q:"Coin bias",a:"Updates belief after seeing flips"}
],
examTip:"Prior times likelihood over evidence."},

{id:35,category:"university",title:"Hypothesis Testing",keywords:["statistics","hypothesis"],
simple:"Use data to decide if a claim is true.",
how:"Step 1: Assume null hypothesis. Step 2: Calculate test statistic. Step 3: Find p value.",
examples:[
{q:"Coin fair test",a:"Flip 100 times. Expect 50 heads. If 70 heads, p value is small"},
{q:"New drug works",a:"Compare group with drug to placebo group"},
{q:"Mean test",a:"Use z test if n big, t test if n small"},
{q:"P value small",a:"Reject null hypothesis"},
{q:"95 percent confidence",a:"Means 5 percent chance of error"}
],
examTip:"P value less than 0.05 means statistically significant."},

{id:36,category:"university",title:"Chain Rule for Derivatives",keywords:["chain","derivative"],
simple:"Derivative of function inside another function.",
how:"Derivative of outside times derivative of inside.",
examples:[
{q:"Derivative of sin x squared",a:"cos x squared times 2x"},
{q:"Derivative of e to the 3x",a:"3 e to the 3x"},
{q:"Derivative of ln x squared",a:"2x over x squared"},
{q:"Derivative of square root of x",a:"1 over 2 square root of x"},
{q:"Derivative of tan 2x",a:"2 sec squared 2x"}
],
examTip:"Peel it like onion. Outside function first."},

{id:37,category:"university",title:"Partial Derivatives",keywords:["partial","derivative"],
simple:"Derivative with more than 1 variable.",
how:"Treat other variables as constants.",
examples:[
{q:"Derivative of x squared y with respect to x",a:"2x y"},
{q:"Derivative of x squared y with respect to y",a:"x squared"},
{q:"Derivative of sin xy",a:"y cos xy"},
{q:"Second partial",a:"Do it twice"},
{q:"Mixed partial",a:"Order does not matter"}
],
examTip:"Used in economics for marginal cost."},

{id:38,category:"university",title:"Improper Integrals",keywords:["integral","improper"],
simple:"Integral with infinity or division by zero. We turn it into a limit problem.",
how:"Step 1: Replace infinity with a variable b. Step 2: Integrate normally. Step 3: Take limit as b goes to infinity. If limit exists, it converges.",
examples:[
{q:"Integral 1 over x squared from 1 to infinity",a:"Integral equals minus 1 over x from 1 to b. Equals 1 minus 1 over b. Limit as b goes to infinity is 1. So it converges"},
{q:"Integral e to the minus x from 0 to infinity",a:"Integral equals minus e to the minus x from 0 to b. Equals 1 minus e to the minus b. Limit is 1. Converges"},
{q:"Integral 1 over x from 1 to infinity",a:"Integral equals ln x from 1 to b. Equals ln b. Limit is infinity. Diverges"},
{q:"Gaussian integral",a:"Integral e to the minus x squared from minus infinity to infinity equals square root of pi. Used in statistics"},
{q:"Test for convergence",a:"Use comparison test. Compare with 1 over x squared which converges"}
],
examTip:"If the area under curve is finite, the improper integral converges. This is super important in probability."},

{id:39,category:"university",title:"Series Convergence Tests",keywords:["series","convergence"],
simple:"Does the infinite sum approach a number or blow up to infinity.",
how:"Step 1: Try nth term test. Step 2: If fails, use ratio test. Step 3: For positive terms use comparison or integral test.",
examples:[
{q:"Series 1 over n squared",a:"p series with p equals 2. Since p greater than 1, it converges"},
{q:"Series 1 over n",a:"Harmonic series. p equals 1. Diverges"},
{q:"Series n factorial over n to the n",a:"Use ratio test. Limit is 1 over e less than 1. Converges"},
{q:"Geometric series r to the n",a:"Converges if absolute r less than 1. Sum equals 1 over 1 minus r"},
{q:"Alternating series minus 1 to the n over n",a:"Terms go to 0 and decrease. Converges by alternating series test"}
],
examTip:"Ratio test is fastest for factorials and powers. If limit less than 1 it converges."},

{id:40,category:"university",title:"Fourier Series Idea",keywords:["fourier","series"],
simple:"Any repeating wave can be built by adding sin and cos waves of different frequencies.",
how:"Step 1: Find a0 for average value. Step 2: Find an for cosine terms. Step 3: Find bn for sine terms. Formula uses integral over one period.",
examples:[
{q:"Square wave",a:"Only odd sine terms. 4 over pi times sin wt plus 1 over 3 sin 3wt plus 1 over 5 sin 5wt"},
{q:"Triangle wave",a:"Only odd cosine terms with 1 over n squared. Sounds smoother"},
{q:"DC signal",a:"Just a0. No sin or cos because it is flat"},
{q:"Sawtooth wave",a:"All sine terms with 1 over n. Used in music synthesis"},
{q:"Even function",a:"Only cosine terms. Odd function only sine terms. Saves half the work"}
],
examTip:"This is how MP3, JPEG, and radio work. Break signal into frequencies."},

  {id:41,category:"engineering",title:"Laplace Transform Without Headache",keywords:["laplace","ode","control"],
simple:"Laplace turns calculus problems into algebra problems. Solve in s domain, then convert back to time domain.",
how:"Step 1: Take Laplace of both sides. Derivative becomes sF of s minus initial value. Step 2: Solve for F of s. Step 3: Use inverse Laplace table to get back to time.",
examples:[
{q:"y prime plus 3y equals 0, y at 0 is 1",a:"Laplace: sY minus 1 plus 3Y equals 0. So Y equals 1 over s plus 3. Inverse: Answer is e to the minus 3t"},
{q:"y double prime equals 0",a:"Laplace: s squared Y minus sy0 minus y0 prime equals 0. Answer: y0 plus y0 prime times t"},
{q:"y prime minus y equals e to the 2t",a:"Laplace: sY minus 1 minus Y equals 1 over s minus 2. Solve. Inverse: e to the 2t minus e to the t"},
{q:"y double prime plus y equals sin t",a:"Laplace: s squared Y plus Y equals 1 over s squared plus 1. Partial fractions. Inverse: half sin t minus half t cos t"},
{q:"y prime plus 2y equals 5",a:"Laplace: sY plus 2Y equals 5 over s. Y equals 5 over s times s plus 2. Inverse: 2.5 minus 2.5 e to the minus 2t"}
],
examTip:"Memorize 3 transforms: 1 becomes 1 over s. e to the at becomes 1 over s minus a. sin wt becomes w over s squared plus w squared"},

{id:42,category:"engineering",title:"Inverse Laplace From Tables",keywords:["laplace","inverse"],
simple:"You solved in s domain. Now get answer back in time domain t.",
how:"Step 1: Break F of s into standard forms. Step 2: Use partial fractions if denominator is product. Step 3: Look up each term in Laplace table.",
examples:[
{q:"1 over s plus 3",a:"Direct from table. Inverse is e to the minus 3t"},
{q:"1 over s squared",a:"Direct from table. Inverse is t"},
{q:"w over s squared plus w squared",a:"Direct from table. Inverse is sin wt"},
{q:"s over s squared plus w squared",a:"Direct from table. Inverse is cos wt"},
{q:"1 over s times s plus a",a:"Partial fractions: 1 over a times 1 over s minus 1 over s plus a. Inverse: 1 over a times 1 minus e to the minus at"}
],
examTip:"90 percent of exam questions are from the first 10 rows of Laplace table. Print it."},

{id:43,category:"engineering",title:"Fourier Series Any Signal as Sines",keywords:["fourier","signal"],
simple:"Engineers use this to break any repeating signal into pure sine waves.",
how:"Step 1: a0 equals average over one period. Step 2: an equals 2 over T times integral f of t cos nwt dt. Step 3: bn equals 2 over T times integral f of t sin nwt dt.",
examples:[
{q:"Square wave",a:"a0 equals 0. Only bn terms. bn equals 4 over n pi for odd n. So series is 4 over pi sin wt plus 1 over 3 sin 3wt"},
{q:"Triangle wave",a:"Only an terms. an equals 8 over n squared pi squared for odd n"},
{q:"DC signal",a:"f of t equals 5. Only a0 equals 5. No AC components"},
{q:"Sawtooth wave",a:"bn equals minus 2 over n. Has all harmonics"},
{q:"Even function",a:"bn equals 0. Only cosine terms. Saves calculation"}
],
examTip:"Even function no sine. Odd function no cosine. Check symmetry first to save 50 percent work."},

{id:44,category:"engineering",title:"Z Transform for Digital Signals",keywords:["z transform","digital"],
simple:"Laplace for discrete time signals. Used in DSP and digital control.",
how:"Step 1: Z transform of x of n equals sum x of n times z to the minus n. Step 2: Delay of 1 sample equals multiply by z to the minus 1.",
examples:[
{q:"Unit impulse delta of n",a:"Sum is 1. Z transform is 1"},
{q:"Unit step u of n",a:"Sum 1 plus z to the minus 1 plus z to the minus 2. Z transform is 1 over 1 minus z to the minus 1"},
{q:"a to the n",a:"Geometric series. Z transform is 1 over 1 minus a z to the minus 1"},
{q:"Delay by 1",a:"If x of n becomes x of n minus 1, multiply Z transform by z to the minus 1"},
{q:"Difference equation",a:"Turn y of n minus y of n minus 1 equals x of n into algebra using z to the minus 1"}
],
examTip:"Final value theorem: limit as n goes to infinity of x of n equals limit as z goes to 1 of 1 minus z to the minus 1 times X of z"},

{id:45,category:"engineering",title:"State Space Model",keywords:["state","control"],
simple:"Instead of one high order ODE, write many first order equations. Better for computers.",
how:"Step 1: Choose state variables. Usually energy storing elements. Step 2: Write x dot equals Ax plus Bu. Step 3: Write y equals Cx plus Du.",
examples:[
{q:"Mass spring damper",a:"States: position x1, velocity x2. x1 dot equals x2. x2 dot equals force minus kx1 minus bx2 all over m"},
{q:"RLC circuit",a:"States: capacitor voltage, inductor current"},
{q:"DC motor",a:"States: armature current, shaft speed"},
{q:"Check controllability",a:"Form matrix B AB A squared B. If rank equals n, system is controllable"},
{q:"Check observability",a:"Form matrix C CA squared. If rank equals n, system is observable"}
],
examTip:"State space handles multiple inputs and outputs. Transfer function cannot."},

{id:46,category:"engineering",title:"Routh Hurwitz Stability Test",keywords:["routh","stability"],
simple:"Check if system is stable without solving for roots.",
how:"Step 1: Write characteristic equation. Step 2: Make Routh table. Step 3: Count sign changes in first column. That equals number of unstable poles.",
examples:[
{q:"s cubed plus 2s squared plus 3s plus 4",a:"First column: 1, 2, 0.5, 4. All positive. Stable"},
{q:"s cubed minus s squared plus 2s plus 8",a:"First column has minus 1. Sign change. Unstable"},
{q:"Find range of K for stability",a:"Put K in table. Set first column greater than 0. Solve for K"},
{q:"Row of zeros",a:"Means symmetric roots on jw axis. Use auxiliary equation"},
{q:"Marginally stable",a:"Row of zeros but no sign change. System oscillates"}
],
examTip:"Number of sign changes in first column equals number of poles in right half plane."},

{id:47,category:"engineering",title:"Bode Plot Basics",keywords:["bode","frequency"],
simple:"Graph of gain and phase vs frequency. Used to design controllers.",
how:"Step 1: Write G of s in factored form. Step 2: Each factor adds 20 dB per decade slope. Step 3: Phase adds too.",
examples:[
{q:"1 over s",a:"Slope minus 20 dB per decade. Phase minus 90 degrees always"},
{q:"1 over s plus 1",a:"Corner frequency at 1 rad per sec. Below flat, above minus 20 dB"},
{q:"s plus 1",a:"Slope plus 20 dB per decade. Phase plus 90 degrees"},
{q:"Second order",a:"Peak near natural frequency wn. Damping decides peak height"},
{q:"Gain margin",a:"How much gain can increase before system becomes unstable"}
],
examTip:"Gain crossover frequency is where magnitude is 0 dB. Read phase margin there."},

{id:48,category:"engineering",title:"Nyquist Stability Criterion",keywords:["nyquist","stability"],
simple:"Plot G of jw in complex plane to check closed loop stability.",
how:"Step 1: Plot real vs imaginary for w from 0 to infinity. Step 2: Count encirclements of minus 1 point. Step 3: Use N equals Z minus P.",
examples:[
{q:"Stable open loop",a:"Nyquist plot does not encircle minus 1. Closed loop stable"},
{q:"Unstable open loop",a:"Plot encircles minus 1 twice clockwise. Check Z"},
{q:"Gain margin",a:"Distance from minus 1 point on real axis"},
{q:"Phase margin",a:"Angle from minus 180 at gain crossover"},
{q:"Closed loop stable",a:"If N equals 0 and P equals 0, then Z equals 0"}
],
examTip:"N is encirclements. Z is unstable closed loop poles. P is unstable open loop poles."},

{id:49,category:"engineering",title:"Numerical Integration Trapezoid Rule",keywords:["numerical","integration"],
simple:"Approximate area under curve by adding trapezoids.",
how:"Step 1: Divide area into n strips. Step 2: Formula: h over 2 times f0 plus fn plus 2 times sum of middle terms.",
examples:[
{q:"Integral x squared from 0 to 2 with 2 strips",a:"h equals 1. Answer: 0.5 times 0 plus 4 plus 2 times 1. Answer is 2.666. Exact is 2.666"},
{q:"More strips means better accuracy",a:"Error decreases as h squared"},
{q:"Simpson rule is better",a:"Uses parabolas instead of straight lines"},
{q:"Used in FEM",a:"Finite element method uses this idea"},
{q:"Error estimate",a:"Error proportional to b minus a times h squared"}
],
examTip:"Trapezoid rule is average of left and right Riemann sum."},

{id:50,category:"engineering",title:"Newton Raphson Root Finding",keywords:["newton","root"],
simple:"Fastest way to find where f of x equals 0.",
how:"Step 1: Start with guess x0. Step 2: Draw tangent. Step 3: New guess equals x minus f of x divided by f prime of x.",
examples:[
{q:"x squared minus 2 equals 0",a:"Start at 1. x1 equals 1 minus 1 over 2 equals 1.5. x2 equals 1.416. Converges to 1.414"},
{q:"cos x minus x equals 0",a:"Converges to 0.739 in 3 iterations"},
{q:"Needs derivative",a:"Formula is x new equals x minus f over f prime"},
{q:"May diverge",a:"If starting guess is too far or derivative is 0"},
{q:"Quadratic convergence",a:"Number of correct digits roughly doubles each iteration"}
],
examTip:"Used in power flow, load flow, and all nonlinear engineering problems."},

{id:51,category:"engineering",title:"Euler Method for ODE",keywords:["euler","ode"],
simple:"Solve differential equation step by step on computer.",
how:"y new equals y old plus h times f of x, y. h is step size.",
examples:[
{q:"y prime equals y, y0 equals 1, step 0.1",a:"y1 equals 1 plus 0.1 times 1 equals 1.1. y2 equals 1.1 plus 0.1 times 1.1 equals 1.21"},
{q:"Small step better accuracy",a:"But takes more computation time"},
{q:"Error is first order",a:"Error proportional to h"},
{q:"Used for real time",a:"Simple to code in microcontroller"},
{q:"Improved Euler",a:"Predictor corrector method. Better accuracy"}
],
examTip:"Euler is bad for stiff equations. Use RK4 instead."},

{id:52,category:"engineering",title:"Runge Kutta 4th Order",keywords:["runge","kutta"],
simple:"Gold standard for solving ODEs numerically. Used in MATLAB and Simulink.",
how:"Calculate 4 slopes per step: k1, k2, k3, k4. Then average them.",
examples:[
{q:"RK4 for y prime equals y",a:"Error is extremely small even with h equals 0.1"},
{q:"Step size can be bigger",a:"Than Euler for same accuracy"},
{q:"4 function evaluations per step",a:"More work but worth it"},
{q:"Used in simulink",a:"Default ODE45 solver uses RK4"},
{q:"Accuracy fourth order",a:"Error proportional to h to the 4"}
],
examTip:"If you need accuracy and stability, use RK4. Default choice."},

{id:53,category:"engineering",title:"Finite Difference Method",keywords:["finite","difference"],
simple:"Turn derivatives into differences. Used to solve PDEs.",
how:"Forward: f x plus h minus f x over h. Central: f x plus h minus f x minus h over 2h.",
examples:[
{q:"First derivative",a:"f x plus h minus f x divided by h. Error order h"},
{q:"Second derivative",a:"f x plus h minus 2f x plus f x minus h divided by h squared"},
{q:"Heat equation",a:"Use time forward, space central difference"},
{q:"Boundary conditions",a:"Critical for correct solution"},
{q:"Stability condition",a:"For heat equation h must be less than 0.5 times delta x squared"}
],
examTip:"Central difference is second order accurate. Best for most problems."},

{id:54,category:"engineering",title:"Convolution in Time Domain",keywords:["convolution","signal"],
simple:"Output of LTI system equals input convolved with impulse response.",
how:"Step 1: Flip one signal. Step 2: Slide it. Step 3: Multiply and add at each step.",
examples:[
{q:"Two rectangles",a:"Convolution gives triangle"},
{q:"LTI system",a:"y of t equals x of t convolve h of t"},
{q:"In frequency domain",a:"Convolution becomes multiplication. Y of w equals X of w times H of w"},
{q:"Used in filters",a:"FIR filter output is convolution"},
{q:"Commutative",a:"A convolve B equals B convolve A"}
],
examTip:"Convolution in time equals multiplication in frequency. This is why FFT is used."},

{id:55,category:"engineering",title:"Sampling Theorem Nyquist",keywords:["sampling","nyquist"],
simple:"To perfectly reconstruct signal, sample at least twice its highest frequency.",
how:"Sampling frequency Fs must be greater than 2 times Fmax.",
examples:[
{q:"Audio 20 kHz",a:"CD samples at 44.1 kHz which is greater than 40 kHz"},
{q:"Below Nyquist",a:"Aliasing happens. High frequency looks like low frequency"},
{q:"Anti aliasing filter",a:"Low pass filter used before ADC"},
{q:"CD quality",a:"44.1 kHz sampling, 16 bit"},
{q:"Reconstruct",a:"Use sinc interpolation between samples"}
],
examTip:"If you sample 10 kHz signal at 15 kHz, you get 5 kHz alias. Always sample higher."},

{id:56,category:"engineering",title:"FFT Fast Fourier Transform",keywords:["fft","frequency"],
simple:"Algorithm to compute DFT in N log N instead of N squared.",
how:"Step 1: Break signal into even and odd. Step 2: Recurse. Step 3: Combine.",
examples:[
{q:"1024 point FFT",a:"Very fast. Used in spectrum analyzers"},
{q:"Used in spectrum analyzer",a:"Shows which frequencies are present"},
{q:"Radix 2",a:"N must be power of 2. Pad with zeros if not"},
{q:"Inverse FFT",a:"Same algorithm with sign change"},
{q:"Zero padding",a:"Increases frequency resolution in plot"}
],
examTip:"FFT is just fast DFT. This one algorithm made digital signal processing possible."},

{id:57,category:"engineering",title:"Error Analysis",keywords:["error","numerical"],
simple:"Every numerical method has error. Know how big.",
how:"Absolute error equals true minus measured. Relative error equals absolute over true.",
examples:[
{q:"True 100, measured 98",a:"Absolute error 2. Percent error 2 percent"},
{q:"Round off error",a:"From computer using finite digits"},
{q:"Truncation error",a:"From cutting Taylor series after few terms"},
{q:"Condition number",a:"Tells how sensitive answer is to input error"},
{q:"Error propagation",a:"For addition add absolute errors. For multiplication add relative errors"}
],
examTip:"Always quote answer with error bounds. 10.5 plus minus 0.1 is better than just 10.5."},

{id:58,category:"engineering",title:"Curve Fitting Least Squares",keywords:["curve","fitting"],
simple:"Find best line through noisy experimental data.",
how:"Minimize sum of squared errors between data and model.",
examples:[
{q:"Linear fit",a:"y equals mx plus b. Solve normal equations"},
{q:"Polynomial fit",a:"Use higher degree for curved data"},
{q:"Exponential fit",a:"Take log of y first, then linear fit"},
{q:"R squared",a:"1 means perfect fit. 0 means no fit"},
{q:"Used in experiments",a:"Lab data always has noise"}
],
examTip:"Normal equations: sum x times sum y minus n sum xy over sum x squared minus n sum x squared."},

{id:59,category:"engineering",title:"Linear Regression",keywords:["regression","statistics"],
simple:"Predict y from x using best fit line.",
how:"Slope equals covariance of x and y divided by variance of x. Intercept makes line go through mean point.",
examples:[
{q:"Sales vs advertising",a:"Find slope. Each dollar ad gives 5 dollars sales"},
{q:"Correlation",a:"r between minus 1 and 1. Tells strength of relationship"},
{q:"Multiple regression",a:"y depends on x1, x2, x3"},
{q:"Residuals",a:"Difference between actual and predicted. Check if random"},
{q:"Overfitting",a:"Too many parameters. Fits noise not trend"}
],
examTip:"Slope equals sum x minus x mean times y minus y mean divided by sum x minus x mean squared."},

{id:60,category:"engineering",title:"Optimization Gradient Descent",keywords:["optimization","gradient"],
simple:"Find minimum of a function by walking downhill.",
how:"Step 1: Start at random point. Step 2: Calculate gradient. Step 3: Move opposite direction by learning rate.",
examples:[
{q:"Find minimum of x squared",a:"Gradient is 2x. Start at 10. Move to 8, 6.4, 5.12. Converges to 0"},
{q:"Learning rate",a:"Step size. Too big overshoot. Too small takes forever"},
{q:"Local minimum",a:"May get stuck. Use random restart"},
{q:"Used in machine learning",a:"Train neural networks by minimizing loss"},
{q:"Momentum",a:"Add previous step to current. Helps go faster"}
],
examTip:"Pick learning rate carefully. 0.01 is common starting value."}
];
