# Yahtzee Upper Secion Scoring
[r/dailyprogrammer challenge#381](https://www.reddit.com/r/dailyprogrammer/comments/dv0231/20191111_challenge_381_easy_yahtzee_upper_section/)

### Description

The game of Yahtzee is played by rolling five 6-sided dice, and scoring the results in a number of ways. You are given a Yahtzee dice roll, represented as a sorted list of 5 integers, each of which is between 1 and 6 inclusive. Your task is to find the maximum possible score for this roll in the upper section of the Yahtzee score card. Here's what that means.

For the purpose of this challenge, the upper section of Yahtzee gives you six possible ways to score a roll. 1 times the number of 1's in the roll, 2 times the number of 2's, 3 times the number of 3's, and so on up to 6 times the number of 6's. For instance, consider the roll [2, 3, 5, 5, 6]. If you scored this as 1's, the score would be 0, since there are no 1's in the roll. If you scored it as2's, the score would be 2, since there's one 2 in the roll. Scoring the roll in each of the six ways gives you the six possible scores:

```
0 2 3 0 10 6
```

The maximum here is 10 (2x5), so your result should be 10.

### Examples

```
yahtzee_upper([2, 3, 5, 5, 6]) => 10
yahtzee_upper([1, 1, 1, 1, 3]) => 4
yahtzee_upper([1, 1, 1, 3, 3]) => 6
yahtzee_upper([1, 2, 3, 4, 5]) => 5
yahtzee_upper([6, 6, 6, 6, 6]) => 30
```

### Optional Bonus
Efficiently handle inputs that are unsorted and much larger, both in the number of dice and in the number of sides per die. (For the purpose of this bonus challenge, you want the maximum value of some number k, times the number of times k appears in the input.)

```
yahtzee_upper([1654, 1654, 50995, 30864, 1654, 50995, 22747,
    1654, 1654, 1654, 1654, 1654, 30864, 4868, 1654, 4868, 1654,
    30864, 4868, 30864]) => 123456
```


