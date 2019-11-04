<!-- Bench Quote Modal -->
<div class="modal fade" 
	 id="benchQuoteModal" 
	 tabindex="-1" 
	 role="dialog" 
	 aria-labelledby="exampleModalLabel" 
	 aria-hidden="true">

	<div class="modal-dialog" 
		 role="document"
		 style="width:600px">

		<div class="modal-content">

	  		<div class="modal-header">

				<h5 class="modal-title" id="exampleModalLabel">Finish Quote</h5>
		
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
	
			<div class="modal-body"
				 style="width:600px">
				
				<table class="modalTable center"
					   style="width:500px">

					<tr>
						<th style="width:400px">Quantity</th>
						<th>Amount</th>
					</tr>

					<tr>
						<td>Left Seating Length</td><td id="leftBenchLength"></td>
					</tr>

					<tr>
						<td>Right Seating Length</td><td id="rightBenchLength"></td>
					</tr>

					<tr>
						<td>Bench Depth</td><td id="benchDepth"></td>
					</tr>

					<tr>
						<td>Bench Height</td><td id="benchHeight"></td>
					</tr>

					<tr>
						<td>Twisth Length</td><td id="benchTwistLength"></td>
					</tr>

					<tr>
						<td>Right Planter</td><td id="benchRightPlanter"></td>
					</tr>

					<tr>
						<td>Left Planter</td><td id="benchLeftPlanter"></td>
					</tr>

				</table>

			</div>

			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Send Me Quote</button>
			</div>
	
		</div>
	
	</div>

</div>
