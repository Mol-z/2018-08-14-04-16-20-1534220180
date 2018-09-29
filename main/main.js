module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
// Write your code here
o) 最大值 = ${sequence.maxmum()}
o) 元素数量 = ${sequence.ele_num()}
o) 平均值 = ${sequence.avg()}
`);
};

class Sequence {
  constructor(input) {
    // Write your code here
	this.input = input;
  }

  minimum() {
    // Write your code here
	var min = this.input[0];
	for(var i = 1; i < this.input.length; i++)
	{
		if(this.input[i] < min)
		{
			min = this.input[i];
		}
	}
	return min;
  }
  }

  // Write your code here
  maxmum() {
	var max = this.input[0];
	for(var i = 1; i < this.input.length; i++)
	{
		if(this.input[i] > max)
		{
			max = this.input[i];
		}
	}
	return max;
  }
  
  ele_num() {
	return this.input.length;
  }
  
  avg() {
	var sum = null;
	var vag_value = null;
	
	for(var i = 0; i < this.input.length; i++)
	{
		sum += this.input[i];
	}
	vag_value = sum / this.input.length;
	return vag_value;
  }
}
