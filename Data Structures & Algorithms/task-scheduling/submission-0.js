class Solution {
    leastInterval(tasks, n) {

        // 1. Count frequency
        let freq = new Map();

        for (let task of tasks) {
            freq.set(task, (freq.get(task) || 0) + 1);
        }

        // 2. Max Heap
        let heap = new MaxPriorityQueue();

        for (let count of freq.values()) {
            heap.enqueue(count);
        }

        // 3. Cooldown queue
        // [remainingCount, availableTime]
        let queue = [];

        let time = 0;

        // 4. Simulate
        while (heap.size() > 0 || queue.length > 0) {

            time++;

            // Move cooled-down tasks back to heap
            if (queue.length > 0 && queue[0][1] === time) {
                let [count, availableTime] = queue.shift();
                heap.enqueue(count);
            }

            // Execute task
            if (heap.size() > 0) {

                let count = heap.dequeue();

                count--;

                if (count > 0) {
                    queue.push([count, time + n + 1]);
                }

            }
        }

        return time;
    }
}