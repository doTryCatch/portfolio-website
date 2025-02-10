# 📊 Multi Linear Regression

## 📌 Introduction

In **Simple Linear Regression**, we use:

\(y = mx + c\)

where **y** is the dependent variable, **x** is the independent variable, **m** is the slope, and **c** is the intercept. But when we deal with **Multiple Linear Regression**, our prediction depends on more than one parameter. 🤔

Thus, the equation becomes:

\(y = b_0 + x_1b_1 + x_2b_2 + x_3b_3 + ... + x_n b_n + e\)

where:

- **y** = Dependent variable
- **x₁, x₂, ..., xₙ** = Independent variables
- **b₀** = Intercept (constant term)
- **b₁, b₂, ..., bₙ** = Beta coefficients (similar to slopes)
- **e** = Error term (difference between actual and predicted values)

## 📊 Example Data for Multi Linear Regression

Let’s consider an example dataset where we predict a dependent variable using multiple independent parameters:

| Data Point | Feature 1 (x₁) | Feature 2 (x₂) | Feature 3 (x₃) | Output (y) |
| ---------- | -------------- | -------------- | -------------- | ---------- |
| 1          | 10             | 20             | 30             | 100        |
| 2          | 15             | 25             | 35             | 150        |
| 3          | 20             | 30             | 40             | 200        |

## 🏗️ Deriving the Model

To achieve a Multiple Linear Regression model, we need to find the **Beta Coefficients** (b₀, b₁, b₂, …) from the given data. Based on those, we can predict the output.

For **n** data points, we can write:

$$
\begin{aligned}
    y_1 &= b_0 + x_{11}b_1 + x_{12}b_2 + x_{13}b_3 + ... + x_{1n}b_n + e_1 \\
    y_2 &= b_0 + x_{21}b_1 + x_{22}b_2 + x_{23}b_3 + ... + x_{2n}b_n + e_2 \\
    y_3 &= b_0 + x_{31}b_1 + x_{32}b_2 + x_{33}b_3 + ... + x_{3n}b_n + e_3 \\
    &\vdots \\
    y_n &= b_0 + x_{n1}b_1 + x_{n2}b_2 + x_{n3}b_3 + ... + x_{nn}b_n + e_n 
\end{aligned}
$$

## 🔢 Matrix Representation

The system of equations can be written in matrix form as:

$$
 Y = X B + E
$$
$$
\begin{bmatrix} 
y_1 \\ 
y_2 \\ 
y_3 \\ 
\vdots \\ 
y_n 
\end{bmatrix} 
=
\begin{bmatrix} 
1 & x_{11} & x_{12} & x_{13} & \dots & x_{1n} \\ 
1 & x_{21} & x_{22} & x_{23} & \dots & x_{2n} \\ 
1 & x_{31} & x_{32} & x_{33} & \dots & x_{3n} \\ 
\vdots & \vdots & \vdots & \vdots & \ddots & \vdots \\ 
1 & x_{n1} & x_{n2} & x_{n3} & \dots & x_{nn} 
\end{bmatrix}
\begin{bmatrix} 
b_0 \\ 
b_1 \\ 
b_2 \\ 
b_3 \\ 
\vdots \\ 
b_n 
\end{bmatrix} 
+ 
\begin{bmatrix} 
e_1 \\ 
e_2 \\ 
e_3 \\ 
\vdots \\ 
e_n 
\end{bmatrix}
$$

where:

- **Y** is the vector of dependent variables
- **X** is the matrix of independent variables
- **B** is the vector of coefficients
- **E** is the error term



### ❓ Why Use Matrix Representation?

Handling multiple equations with many parameters in a linear form is complex and time-consuming. Matrices help simplify the process by allowing us to use algebraic operations to solve for unknown coefficients efficiently.

The matrix is exactly equivalent to the linear equation. If you check, solving the matrix multiplication and equating the relation will yield the same system of equations. Let's verify:

#### 🔍 Expanding the Matrix Multiplication

Expanding the first row:

$$
 y_1 = b_0 + x_{11}b_1 + x_{12}b_2 + x_{13}b_3 + ... + x_{1n}b_n + e_1
$$

Now, let's rearrange this equation with respect to error **e**:

$$
 e_1 = y_1 - (b_0 + x_{11}b_1 + x_{12}b_2 + ... + x_{1n}b_n)
$$

which simplifies to:

$$
e_1 = y_1 - \hat{y}_1
$$

where:

- \( y \) is the actual value  
- \( \hat{y} \) is the predicted value  

Similarly, for \( i = 2 \):

$$
e_2 = y_2 - \hat{y}_2
$$

For all data points, we generalize:

$$
e_i = y_i - \hat{y}_i, \quad \forall i = 1, 2, \dots, n
$$

Summing from \( i = 1 \) to \( i = n \):

$$
RSS = \sum_{i=1}^{n} e_i^2
$$

which can be represented in matrix form as:

$$
RSS = E^T E = (Y - X B)^T (Y - X B)
$$### **To Proof:**  
$$
\sum_{i=1}^{n} e_i^2 = E^T E
$$

Let’s take an example,  
Suppose, $$ n = 4 $$  

Given values:  
$$
x_1 = 1, \quad x_2 = 2, \quad x_3 = 3, \quad x_4 = 4
$$
And,  
$$
Y =
\begin{bmatrix} 
2 \\ 
2 \\ 
2 \\ 
2 
\end{bmatrix}
$$

Now,  

$$
\sum_{i=1}^{n} x_i \cdot y
$$

Expanding,  

$$
= x_1 \cdot y_1 + x_2 \cdot y_2 + x_3 \cdot y_3 + x_4 \cdot y_4
$$

$$
= 1 \times 2 + 2 \times 2 + 3 \times 2 + 4 \times 2
$$

$$
= 2 + 4 + 6 + 8 = 20
$$

### **In Matrix Form:**  
Let,

$$
X =
\begin{bmatrix} 
1 \\ 
2 \\ 
3 \\ 
4 
\end{bmatrix}, 
\quad
Y =
\begin{bmatrix} 
2 \\ 
2 \\ 
2 \\ 
2 
\end{bmatrix}
$$

Now,

$$
X^T Y =
\begin{bmatrix} 
1 & 2 & 3 & 4 
\end{bmatrix}
\begin{bmatrix} 
2 \\ 
2 \\ 
2 \\ 
2 
\end{bmatrix}
$$

Performing matrix multiplication:

$$
(1 \times 2) + (2 \times 2) + (3 \times 2) + (4 \times 2)
$$

$$
= 2 + 4 + 6 + 8 = 20
$$

### **Final Result:**  
$$
\sum_{i=1}^{n} x_i \cdot y = X^T Y = 20
$$

This verifies that the summation form and the matrix representation are **equivalent**! ✅


### 🔄 Representing RSS in Transpose Form

We can express **RSS** in matrix form using transposition:

$$
 RSS = (Y - X B)^T (Y - X B)
$$

Now, performing matrix multiplication:

$$
 (Y - X B)^T (Y - X B) = Y^T Y - 2B^T X^T Y + B^T X^T X B
$$

To find the optimal values of **B**, we take the derivative of RSS with respect to **B** and set it to zero to achieve the **minimum error** (least squares approach):

$$
 \frac{d}{dB} (Y^T Y - 2B^T X^T Y + B^T X^T X B) = 0
$$

Solving for **B**:

$$
 -2X^T Y + 2X^T X B = 0
$$

$$
 X^T X B = X^T Y
$$

$$
 B = (X^T X)^{-1} X^T Y
$$

Thus, we derive the normal equation, which gives us the best-fit coefficients **B** that minimize the error! 🚀

## 🎯 Conclusion

Multiple Linear Regression is a powerful tool for making predictions when multiple factors influence an outcome. By solving for the **beta coefficients**, we can build accurate models and extract valuable insights from data! 💡📊

