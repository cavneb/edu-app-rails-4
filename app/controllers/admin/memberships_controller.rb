class Admin::MembershipsController < ApplicationController
  def edit
    @membership = Membership.find(params[:id])
  end
end
