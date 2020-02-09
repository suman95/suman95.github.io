import java.util.Stack;


class Solution {

    public static void main(String[] args) {
       KMP kmp = new KMP();
        System.out.println(kmp.isSubstring("ABABABCABABABCABABABC","abbaabb"));
    }
}