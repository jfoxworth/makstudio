<!-- Bench Quote Modal -->
<div class="modal fade btn-primary" 
	 id="benchQuoteModal" 
	 tabindex="-1" 
	 role="dialog" 
	 aria-labelledby="exampleModalLabel" 
	 aria-hidden="true">

	<div class="modal-dialog btn-primary" 
		 role="document"
		 style="min-width:600px">

		<div class="modal-content">

	  		<div class="modal-header">

				<h5 class="modal-title" id="exampleModalLabel">Finish Quote</h5>
		
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
	
			<div class="modal-body"
				 style="width:500px">
				
				<table class="modalTable center"
					   style="width:500px; margin-left:25px">

					<tr style="height:35px; border-bottom:1px solid #ccc; font-weight:bold">
						<th style="width:400px">Quantity</th>
						<th>Amount</th>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Left Seating Length</td><td id="leftBenchLength"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Right Seating Length</td><td id="rightBenchLength"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Bench Depth</td><td id="benchDepth"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Bench Height</td><td id="benchHeight"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Twisth Length</td><td id="benchTwistLength"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Right Planter</td><td id="benchRightPlanter"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
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
