## 📊 Pure Mathematics Behind Regression

Regression is the backbone of predictive modeling in machine learning. In this blog, we will dive deep into regression techniques—**simple linear, multi-linear, and logistic regression**—and learn how to create our own predictive models from scratch. 🧠✨

🚀 **What you will learn:**
- How data is interpreted and calculated to form predictive models
- How to create a model that works accurately using mathematical principles
- Step-by-step explanation of regression techniques

🔍 Let's start with **Linear Regression**!

---

## 📈 Linear Regression

Before we dive into calculations, let's understand what regression really means. In simple terms, **regression helps machines learn from given data** so that they can predict future values based on past trends. 📊

### 🔹 What is Linear Regression?
Linear regression is a technique that **predicts continuous values** using a straight-line equation:

📌 **Mathematical equation of a straight line:**

$$
y = mx + c
$$

Where:
- **y** = dependent variable (e.g., salary)
- **x** = independent variable (e.g., years of experience)
- **m** = slope of the line
- **c** = intercept (where the line crosses the y-axis)

Let's break it down with an example. 👇

### 📊 Example Dataset

| 🏆 Years of Experience (X) | 💰 Salary (Y) (in $1000) |
| :-------------------------: | :----------------------: |
| 1                           | 35                       |
| 2                           | 40                       |
| 3                           | 45                       |
| 4                           | 50                       |
| 5                           | 55                       |
📌 **Our goal:** Find a pattern so that given a new input (years of experience), we can predict the salary.

---

## 🛠 Finding the Best Fit Line

### 🔍 Step 1: Start with the General Equation

We assume the relationship follows:

$$
y = mx + c
$$

where $ y $ represents salary, $ x $ represents years of experience, $ m $ is the slope, and $ c $ is the intercept.

### 📌 Step 2: Forming Two Main Summation Equations

To generalize for multiple data points, we sum up the equations for all data points:

📍 **Summing the original equation over all data points:**

$$
\sum Y = m \sum X + Nc
$$

📍 **Multiplying each equation by $ x $ and summing:**

$$
\sum XY = m \sum X^2 + c \sum X
$$

Now, these two equations contain summations that can be computed for any dataset. 🧮

### 📌 Step 3: Solving for $ m $ and $ c $

Rearranging the equations:

$$
m = \frac{N \sum XY - \sum X \sum Y}{N \sum X^2 - (\sum X)^2}
$$

$$
c = \frac{\sum Y - m \sum X}{N}
$$

✅ **With these formulas, we can compute $ m $ and $ c $ for any dataset, whether small or large!**

📌 Once we have $ m $ and $ c $, we can use the equation **y = mx + c** to predict salary for new experience values.

---

## 🚀 What's Next?

Now that we've built an understanding of **simple linear regression**, we will explore **multi-linear regression** and **logistic regression** in the next sections. Stay tuned! 🔥📊

