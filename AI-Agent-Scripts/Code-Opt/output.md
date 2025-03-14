The C code takes an array of integers as input from the user, sorts it using the bubble sort algorithm, and prints the sorted array.

**Formatted Code:**

```c
#include <stdio.h>

int main() {
    int a[100], n, i, j, temp;
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (i = 0; i < n; i++)
        scanf("%d", &a[i]);
    for (i = 0; i < n - 1; i++)
        for (j = 0; j < n - 1; j++)
            if (a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
    printf("Sorted array: ");
    for (i = 0; i < n; i++)
        printf("%d ", a[i]);
    return 0;
}
```

**Optimized Code:**

```c
#include <stdio.h>

int main() {
    int a[100], n, i, j, temp;
    printf("Enter size: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (i = 0; i < n; i++)
        scanf("%d", &a[i]);

    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }

    printf("Sorted array: ");
    for (i = 0; i < n; i++)
        printf("%d ", a[i]);
    return 0;
}
```

**Optimization:**

*   The inner loop's upper bound is changed from `n-1` to `n-1-i`. This is because after each pass of the outer loop, the largest `i` elements are already in their correct sorted positions at the end of the array. Therefore, we don't need to compare them again. This reduces the number of comparisons made by the algorithm, especially in later passes.
