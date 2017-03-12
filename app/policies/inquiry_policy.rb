class InquiryPolicy < ApplicationPolicy

  def index?
    true
  end

  def show?
    customer?
  end

  def create?
    customer?
  end

  def update?
    customer?
  end

  def destroy?
    customer?
  end

  class Scope < Scope

    def user_roles
      joins_clause = <<~SQL
        JOIN Roles r ON r.mname = 'Inquiry' 
          AND r.mid = Inquiries.id 
          AND r.user_id #{user_criteria}
      SQL

      scope
        .select("Inquiries.*, r.role_name")
        .joins(joins_clause)
    end

    def resolve
      user_roles
    end
  end
end
