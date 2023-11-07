# Section#1 Arrays

# Question #1 Two sum

Given an array of integers, return the indices of the two numbers that add up to a given target

## Step 1 : Verify the constraints

- **Are all the numbers positive or can there be negatives? (정수는 양수와 음수 모두 가능하므로)**
  ⇒ All numbers are positive
- **Are there duplicate numbers in the array?**
  ⇒ there are no duplicate numbers in Array
- **Will there always be a solution available?**
  ⇒ No, there may not always be a solution (반례로, 빈 배열이나 요소가 하나만 있는 배열이 될 수 있다.)
- **What do we return if there’s no solution?**
  ⇒ Just return null
- **Can there be multiple pairs that add up to the target?**
  ⇒ No, only 1 pair of numbers will add up to the target

## Step 2: Write out some test cases

- 1단계에선 질문할 내용들을 커버할 수 있는 테스트케이스 생각해보기

```jsx
// case 1
[1,3,7,9,2], t=11, [3,4]
// case 2
[1,3,7,9,2], t=25, null
// case 3
[], t=1, null
// case 4
[5], t=5, null
// case 5
[1,6], t=7, [0,1]
```

# Step 3: Figure out a solution without code

- 어떻게 풀 수 있을지 논리적으로 생각해 보기
  1. 배열 안에 있는 모든 값 더해보기
  - 숫자 하나를 고르고, 다른 모든 요소와 합해서 계산해보기
  1. 투 포인터 전략
  - 두 개의 포인터(p1,p2)를 지정하고, 특정 로직을 통해 포인터를 이동
  - 두 포인터의 합이 target이 되야 하므로 찾아야 하는 값은 **nums[p2] = target - nums[p1]**이 성립해야 함

# Step 4: Write out our solution in code

```jsx
// Solution 1
const findTwoSum = (array, target) => {
  for (let p1 = 0; p1 < array.length; p1++) {
    const findNum = target - array[p1];

    for (let p2 = p1 + 1; p2 < array.length; p2 += 1) {
      if (findNum === array[p2]) return [p1, p2];
    }
  }

  return null;
};

const array = [1, 3, 7, 9, 2];
const target = 11;

console.log(findTwoSum(array, target));
```

# Step 5: Double Check for Errors

- typo, missing cases, and so on

# Step 6: Test our code with our test cases

# Step 7 : Space & Time Complexity

- input에 따라 시간과 공간이 어떻게 바뀔지 분석한다.
- 시간 복잡도는 반복문 등을 살펴 보면 된다.
  - 첫 번째 솔루션은 크게 두 개의 이중 for 문을 갖는데, 바깥쪽 for 문은 일반적이지만 안 쪽 for문은 모든 요소를 다 보진 않는다. 그럼에도 N의 시간 복잡도를 갖는다고 계산해서 결과적으로 O(N^2)이 된다.
  - 그 이유는 바로 input이 얼만큼 늘어나든 바깥쪽 for 문의 탐색 요소 수 만큼 상대적으로 안 쪽 for 문의 탐색 요소 수도 증가하기 때문
- 공간 복잡도는 변수와 객체 할당 현황을 보면 된다.
  - 첫 번째 솔루션은 변수만 사용하므로 O(1)이 공간 복잡도를 갖는다.
- 복잡도 종류

Polynomial - 다항 복잡도(다항식 함수로 표현)

- O(logN) - Logarithmic
- O(N) - Linear
- O(NlogN) - Linearithmic
- O(N^2) - Quadratic
- O(N^3) - Cubic

Exponential - 지수 복잡도 (지수 식으로 표현)- N이 커질수록 곱하는 횟수도 N에 비례해 증가한다

- O(2^N) - Exponential
- O(!N) - Factorial
- O(N^N) - Exponential

# Step 8 :Can we optimize our solution?

cf) 공간 복잡도와 시간 복잡도는 반비례하는 경향이 있다.

- 첫 번째 솔루션을 분석해보면,
  - 바깥 쪽 반복문은 NTF(찾고자 하는 숫자)를 계산한다.
  - 안 쪽 반복문은 nums[p2] === NTF를 비교한다
  - 반복문이 2중으로 반복되는 이유는 NTF가 바깥쪽 반복문에서만 살아있기 때문 ⇒ 이를 다른 자료 구조(해시 맵)에 저장하면 이중 반복문을 사용하지 않아도 됨
- 먼저 해시맵을 만들고, 배열을 반복하면서 요소가 해시 맵에 있는지 체크한다. 만약 없으면 타겟과 현재 값을 뺀 값을 키로 하고 값을 현재 인덱스로 해서 저장한다.

```jsx
const findTwoSum = (array, target) => {
  const hashMap = {};

  for (let p1 = 0; p1 < array.length; p1++) {
    const ntf = array[p1];

    if (hashMap[ntf] !== undefined) return [hashMap[ntf], p1];

    hashMap[target - ntf] = p1;
  }

  return null;
};
```

- 새로운 솔루션의 복잡도는 다음과 같다
  - Time Complexity : O(N)
  - Space Complexity: O(N)
