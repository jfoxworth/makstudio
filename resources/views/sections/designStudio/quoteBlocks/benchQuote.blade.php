<!-- Bench Quote Modal -->
<div class="modal fade" 
	 id="benchQuoteModal" 
	 tabindex="-1" 
	 role="dialog" 
	 aria-labelledby="exampleModalLabel" 
	 aria-hidden="true">

	<div class="modal-dialog" 
		 role="document"
		 style="min-width:600px">

		<div class="modal-content">

	  		<div class="modal-header btn-primary">

				<h5 class="modal-title btn-primary" id="exampleModalLabel">Finish Quote</h5>
		
				<button type="button" class="close btn-primary" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
	
			<div class="modal-body"
				 style="width:500px">
				
				<table class="modalTable center"
					   style="width:500px; margin-left:25px">

					<tr style="height:35px; border-bottom:1px solid #ccc; font-weight:bold">
						<th style="width:300px">Quantity</th>
						<th>Amount</th>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Left Seating Length</td><td id="leftBenchLengthQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Right Seating Length</td><td id="rightBenchLengthQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Bench Depth</td><td id="benchDepthQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Bench Height</td><td id="benchHeightQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Twisth Length</td><td id="benchTwistLengthQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Right Planter</td><td id="benchRightPlanterQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Left Planter</td><td id="benchLeftPlanterQuote"></td>
					</tr>

					<tr style="height:30px; background-color:#888; color:#fff">
						<td>Price</td><td id="benchModalPriceQuote"></td>
					</tr>

				</table>

			</div>

			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				@guest
				@else
					<button type="button" class="btn btn-primary">Send Me Quote</button>
				@endguest
			</div>
	
		</div>
	
	</div>

</div>
