<script>
	/** @type {number} */
	// let number = $state();

	// async function roll() {
	// 	const response = await fetch('/api/test');
	// 	number = await response.json();
	// }
</script>

<!-- 外層容器 -->
<div class="min-h-screen flex justify-center items-center gap-8 flex-col md:flex-row">
	<!-- 左側 Top 10 玩家 -->
	<div class="card bg-base-100 shadow-xl p-4 overflow-x-auto">
		<h2 class="text-xl font-bold mb-4 text-center text-blue-700 bg-blue-50 rounded-lg py-2">
			🔥 Top 10 玩家
		</h2>
		<table class="table">
			<thead>
				<tr>
					<th>#</th>
					<th>名稱</th>
					<th>職業</th>
				</tr>
			</thead>
			<tbody>
				<tr class="bg-base-200">
					<th>1</th>
					<td>Cy Ganderton</td>
					<td>Quality Control Specialist</td>
				</tr>
				<tr>
					<th>2</th>
					<td>Hart Hagerty</td>
					<td>Desktop Support Technician</td>
				</tr>
				<tr>
					<th>3</th>
					<td>Brice Swyre</td>
					<td>Tax Accountant</td>
				</tr>
				<tr>
					<th>4</th>
					<td>Brice Swyre</td>
					<td>Tax Accountant</td>
				</tr>
				<tr>
					<th>5</th>
					<td>Brice Swyre</td>
					<td>Tax Accountant</td>
				</tr>
				<tr>
					<th>6</th>
					<td>Brice Swyre</td>
					<td>Tax Accountant</td>
				</tr>
				<tr>
					<th>7</th>
					<td>Brice Swyre</td>
					<td>Tax Accountant</td>
				</tr>
				<tr>
					<th>8</th>
					<td>Brice Swyre</td>
					<td>Tax Accountant</td>
				</tr>
				<tr>
					<th>9</th>
					<td>Brice Swyre</td>
					<td>Tax Accountant</td>
				</tr>
				<tr>
					<th>10</th>
					<td>Brice Swyre</td>
					<td>Tax Accountant</td>
				</tr>
			</tbody>
		</table>
	</div>

	<!-- 右側 Top 10 公會 -->
	<div class="card bg-base-100 shadow-xl p-4 overflow-x-auto">
		<h2 class="text-xl font-bold mb-4 text-center text-green-700 bg-green-50 rounded-lg py-2">
			⚡ Top 10 公會
		</h2>
		<table class="table">
			<thead>
				<tr>
					<th>#</th>
					<th>名稱</th>
					<th>成員數</th>
					<th>徽章顏色</th>
				</tr>
			</thead>
			<tbody>
				<tr class="bg-base-200">
					<th>1</th>
					<td>Alpha Guild</td>
					<td>50</td>
					<td>Green</td>
				</tr>
				<tr>
					<th>2</th>
					<td>Beta Squad</td>
					<td>45</td>
					<td>Yellow</td>
				</tr>
				<tr>
					<th>3</th>
					<td>Gamma Team</td>
					<td>42</td>
					<td>Orange</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
