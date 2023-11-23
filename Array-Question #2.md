# Question #2 Container With Most Water

You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold.

# Step1 : Verify the constraints

- Does the thickness of the lines affect the area?
  - No, assume they take up no space
- Do the left and right sides of the graph count as walls?
  - No, the sides cannot be used to form a container. (only use elements in Array)
- Does a higher line inside out container affect our area?
  - No, lines inside a container don’t affect the area

# Step 2: Write out some test cases

```jsx
Case1
[7,1,2,3,9] // 7*4 = 28

Case2
[] // 0

Case3
[5] // 0

Case4
[6,9,3,4,5,8]// 8 * 4 = 32
```

공통 규칙

- 양 쪽 끝부터 시작해서 값을 비교해 더 작은 값을 H로 삼고, 두 점 사이의 거리(인덱스 사이의 거리)를 W로 삼는다.
- 만약 다음 요소가 현재 요소보다 더 크다면

# Step 3: Figure out a solution without code

- 특정 최대값을 찾거나, 최소 값을 찾는 경우 모든 가능성을 계산한 다음, 선택해야함
- 이 문제에서 최대 영역을 구하려면 Length \* Width로 계산함
  - Length = Min(a,b) / Width = (bi - ai)

# Step 4: Bruth Force Solution

```jsx
const maxArea = (height) => {
  let ans = 0;

  for (let left = 0; left < height.length; left += 1) {
    for (let right = left + 1; right < height.length; right += 1) {
      const size = Math.min(height[left], height[right]) * (right - left);
      ans = Math.max(ans, size);
    }
  }

  return ans;
};
```

# Step 5: Can we optimize our Solution?

- 기존 솔루션의 시간 복잡도는 O(N^2), 공간 복잡도는 O(1)
- new technique ⇒ Shift Pointers
  - 양 쪽 끝 포인터를 지정해 두고, 조건에 따라 이동 여부를 결정
  - 이 문제에서는 높이 값(두 포인터에서 둘 중에 더 작은 값)이 더 커지면 전체 너비를 구할 때 영향을 끼친다는 것을 알 수 있다.
  - 이 테크닉의 핵심은 2개의 포인터를 어떤 기준으로 이동시킬지 정하는 것
    - 즉, 두 포인터의 요소 값을 비교해서 만약에 더 작은 값이 있다면, 그 작은 값을 가진 포인터를 이동해서 값을 갱신해간다.
