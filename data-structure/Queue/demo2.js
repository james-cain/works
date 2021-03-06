/**
 * 优先队列 ：优先队列问题是特殊的队列，在删除元素时不遵守先进先出的约定。
 * 从优先队列中删除元素时，需要考虑优先权的限制。
 * 以医院就诊为例，病人进入候诊室时，分帧护士会评估患者病情的严重程度，然后给优先级代码。高优先级的患者先于低优先级患者就医，同样优先级的患者按照先来先服务的顺序就医。
 */
var Patient = /** @class */ (function () {
    function Patient(name, code) {
        this.name = name;
        this.code = code;
    }
    return Patient;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.dataStore = [];
    }
    Queue.prototype.enqueue = function (element) {
        this.dataStore.push(element);
    };
    /**
     * 不同的在出队函数
     */
    Queue.prototype.dequeue = function () {
        var entry = 0;
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i].code < this.dataStore[entry].code) {
                entry = i;
            }
        }
        return this.dataStore.splice(entry, 1)[0];
    };
    Queue.prototype.front = function () {
        return this.dataStore[0];
    };
    Queue.prototype.back = function () {
        return this.dataStore[this.dataStore.length - 1];
    };
    Queue.prototype.toString = function () {
        var retStr = '';
        for (var i = 0; i < this.dataStore.length; i++) {
            retStr += this.dataStore[i].name + ' code: ' + this.dataStore[i].code + '\n';
        }
        return retStr;
    };
    Queue.prototype.empty = function () {
        if (this.dataStore.length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Queue;
}());
var p = new Patient('rey', 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient('shieh', 4);
ed.enqueue(p);
p = new Patient('James', 6);
ed.enqueue(p);
p = new Patient('Cain', 1);
ed.enqueue(p);
p = new Patient('cora', 1);
ed.enqueue(p);
p = new Patient('xie', 3);
ed.enqueue(p);
console.log(ed.toString());
// rey code: 5
// shieh code: 4
// James code: 6
// Cain code: 1
// cora code: 1
// xie code: 3
var seen = ed.dequeue();
console.log('Patient being treated: ' + seen.name + '\n');
console.log(ed.toString());
